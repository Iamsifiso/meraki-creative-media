import { format, addDays, isWeekend, isBefore, startOfDay } from 'date-fns';

export const serviceTypes = [
  {
    id: 'portrait-bronze',
    name: 'Portrait Photography - Bronze Package',
    description: '30 min session, 1 outfit, 25-30 edited photos - R350',
    duration: '30 minutes',
  },
  {
    id: 'portrait-silver',
    name: 'Portrait Photography - Silver Package',
    description: '1 hour session, 2 outfits, 30-50 edited photos, free Outfit Highlight Reel - R650',
    duration: '1 hour',
  },
  {
    id: 'portrait-gold',
    name: 'Portrait Photography - Gold Package',
    description: '2 hour session, 2-3 outfits, 60-80 edited photos, free Outfit Highlight Reel - R900',
    duration: '2 hours',
  },
  {
    id: 'bts',
    name: 'BTS - Behind the Scenes Event Content',
    description: '1.5 hours coverage, 2 edited videos, 40 individual videos, 20 photos - Starting at R800',
    duration: '1 hour 30 minutes',
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
