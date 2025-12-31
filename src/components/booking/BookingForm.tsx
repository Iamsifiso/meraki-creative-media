'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import Button from '@/components/shared/Button';
import CalendarWidget from './CalendarWidget';
import TimeSlotPicker from './TimeSlotPicker';
import { serviceTypes } from '@/lib/utils/booking-helpers';

const bookingSchema = z.object({
  serviceType: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Please provide a valid phone number'),
  location: z.string().min(2, 'Please provide a location'),
  specialRequests: z.string().optional(),
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      location: 'Paarl, Western Cape',
    },
  });

  const selectedService = watch('serviceType');

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setValue('date', format(date, 'yyyy-MM-dd'));
    setSelectedTime(''); // Reset time when date changes
    setValue('time', '');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setValue('time', time);
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setSelectedDate(null);
        setSelectedTime('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Step 1: Service Selection */}
      <div>
        <h3 className="font-heading text-2xl mb-4">1. Select a Service</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceTypes.map((service) => (
            <label
              key={service.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedService === service.id
                  ? 'border-brand-orange bg-brand-orange/10'
                  : 'border-gray-300 dark:border-gray-600 hover:border-brand-orange'
              }`}
            >
              <input
                type="radio"
                value={service.id}
                {...register('serviceType')}
                className="sr-only"
              />
              <div className="font-semibold mb-1">{service.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {service.description}
              </div>
              <div className="text-sm text-brand-orange mt-2">
                Duration: {service.duration}
              </div>
            </label>
          ))}
        </div>
        {errors.serviceType && (
          <p className="text-red-500 text-sm mt-2">{errors.serviceType.message}</p>
        )}
      </div>

      {/* Step 2: Date Selection */}
      <div>
        <h3 className="font-heading text-2xl mb-4">2. Choose a Date</h3>
        <CalendarWidget
          selectedDate={selectedDate}
          onSelectDate={handleDateSelect}
        />
        {errors.date && (
          <p className="text-red-500 text-sm mt-2">{errors.date.message}</p>
        )}
      </div>

      {/* Step 3: Time Selection */}
      {selectedDate && (
        <div>
          <h3 className="font-heading text-2xl mb-4">3. Select a Time</h3>
          <TimeSlotPicker
            selectedTime={selectedTime}
            onSelectTime={handleTimeSelect}
            selectedDate={selectedDate}
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-2">{errors.time.message}</p>
          )}
        </div>
      )}

      {/* Step 4: Client Information */}
      <div>
        <h3 className="font-heading text-2xl mb-4">4. Your Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              id="fullName"
              type="text"
              {...register('fullName')}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent dark:bg-gray-800"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent dark:bg-gray-800"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="+27"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent dark:bg-gray-800"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-2">
              Preferred Location *
            </label>
            <input
              id="location"
              type="text"
              {...register('location')}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent dark:bg-gray-800"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
            Special Requests (Optional)
          </label>
          <textarea
            id="specialRequests"
            rows={4}
            {...register('specialRequests')}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent dark:bg-gray-800 resize-none"
            placeholder="Tell us more about your vision or any specific requirements..."
          />
        </div>
      </div>

      {/* Terms and Conditions */}
      <div>
        <label className="flex items-start">
          <input
            type="checkbox"
            {...register('agreedToTerms')}
            className="mt-1 mr-3 w-5 h-5 text-brand-orange focus:ring-brand-orange"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">
            I agree to the terms and conditions and understand that this booking is
            subject to confirmation. *
          </span>
        </label>
        {errors.agreedToTerms && (
          <p className="text-red-500 text-sm mt-1">{errors.agreedToTerms.message}</p>
        )}
      </div>

      {/* Submit Status */}
      {submitStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Booking request submitted successfully! We'll send you a confirmation email shortly.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Sorry, there was an error processing your booking. Please try again or contact us directly.
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="w-full text-lg py-4"
      >
        {isSubmitting ? 'Processing...' : 'Confirm Booking'}
      </Button>
    </form>
  );
}
