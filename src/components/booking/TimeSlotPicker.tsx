'use client';

import React from 'react';
import { generateTimeSlots } from '@/lib/utils/booking-helpers';

interface TimeSlotPickerProps {
  selectedTime: string;
  onSelectTime: (time: string) => void;
  selectedDate: Date;
}

export default function TimeSlotPicker({ selectedTime, onSelectTime, selectedDate }: TimeSlotPickerProps) {
  const timeSlots = generateTimeSlots();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Select an available time slot (South Africa Standard Time - SAST)
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {timeSlots.map((time) => (
          <button
            key={time}
            type="button"
            onClick={() => onSelectTime(time)}
            className={`
              px-4 py-3 rounded-lg font-medium transition-all
              ${selectedTime === time
                ? 'bg-brand-orange text-white scale-105'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }
            `}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
