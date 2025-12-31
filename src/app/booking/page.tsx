import type { Metadata } from 'next';
import BookingForm from '@/components/booking/BookingForm';
import Badge from '@/components/shared/Badge';
import Card from '@/components/shared/Card';

export const metadata: Metadata = {
  title: 'Book a Session | Meraki Creative Media',
  description: 'Book a professional photography or videography session with Meraki Creative Media in Paarl, Western Cape.',
};

export default function BookingPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-orange to-brand-peach text-white">
        <div className="container-custom text-center">
          <div className="flex justify-center mb-6">
            <Badge type="book-us" size={120} />
          </div>
          <h1 className="font-heading text-5xl md:text-6xl mb-6">Book Your Session</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to create something amazing? Schedule your photography or videography
            session with us today. Choose your preferred date, time, and service below.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <Card className="p-8 md:p-12">
            <BookingForm />
          </Card>
        </div>
      </section>

      {/* Information Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl mb-6 text-center">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Booking Confirmation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    You'll receive a confirmation email with all the details of your booking.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Pre-Session Consultation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We'll reach out to discuss your vision, preferences, and any special requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Your Session</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We'll meet at the scheduled time and location to capture amazing content.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your edited photos/videos will be delivered digitally within the agreed timeframe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
