import { format, addDays, isWeekend, isBefore, startOfDay } from 'date-fns';

export const serviceTypes = [
  {
    id: 'portrait',
    name: 'Portrait Photography',
    description: 'Professional portrait session',
    duration: '1-2 hours',
  },
  {
    id: 'event',
    name: 'Event Photography & Videography',
    description: 'Full event coverage',
    duration: '4-8 hours',
  },
  {
    id: 'commercial',
    name: 'Commercial Photography & Videography',
    description: 'Business and product content',
    duration: '2-4 hours',
  },
  {
    id: 'content',
    name: 'Content Creation',
    description: 'Social media and digital content',
    duration: '1-3 hours',
  },
];

export const generateTimeSlots = () => {
  const slots = [];
  const startHour = 9; // 9:00 AM
  const endHour = 17; // 5:00 PM

  for (let hour = startHour; hour < endHour; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    if (hour < endHour - 1) {
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
  }

  return slots;
};

export const isDateAvailable = (date: Date): boolean => {
  const today = startOfDay(new Date());

  // Can't book in the past
  if (isBefore(date, today)) {
    return false;
  }

  // Sundays are not available (based on business days configuration)
  if (date.getDay() === 0) {
    return false;
  }

  return true;
};

export const getNextAvailableDate = (): Date => {
  let date = new Date();
  date.setHours(0, 0, 0, 0);

  while (!isDateAvailable(date)) {
    date = addDays(date, 1);
  }

  return date;
};
