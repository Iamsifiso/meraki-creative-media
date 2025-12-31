'use client';

import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { isDateAvailable } from '@/lib/utils/booking-helpers';

interface CalendarWidgetProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function CalendarWidget({ selectedDate, onSelectDate }: CalendarWidgetProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get the day of week for the first day (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = monthStart.getDay();

  // Add empty cells for days before the first day of the month
  const emptyDays = Array(firstDayOfWeek).fill(null);

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateClick = (date: Date) => {
    if (isDateAvailable(date)) {
      onSelectDate(date);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-md mx-auto">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={handlePreviousMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="font-heading text-xl">
          {format(currentMonth, 'MMMM yyyy')}
        </h3>
        <button
          type="button"
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {/* Empty cells for days before the first day of month */}
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {/* Actual days */}
        {daysInMonth.map((date) => {
          const available = isDateAvailable(date);
          const selected = selectedDate && isSameDay(date, selectedDate);
          const today = isSameDay(date, new Date());

          return (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => handleDateClick(date)}
              disabled={!available}
              className={`
                aspect-square p-2 text-sm rounded-lg transition-all
                ${available ? 'cursor-pointer hover:bg-brand-orange hover:text-white' : 'cursor-not-allowed opacity-40'}
                ${selected ? 'bg-brand-orange text-white' : ''}
                ${today && !selected ? 'border-2 border-brand-orange' : ''}
                ${!selected && available ? 'hover:scale-110' : ''}
              `}
            >
              {format(date, 'd')}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 text-sm space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-brand-orange rounded" />
          <span className="text-gray-600 dark:text-gray-400">Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-brand-orange rounded" />
          <span className="text-gray-600 dark:text-gray-400">Selected</span>
        </div>
      </div>
    </div>
  );
}
