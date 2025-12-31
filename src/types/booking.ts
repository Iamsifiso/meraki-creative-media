export interface BookingFormData {
  serviceType: string;
  date: string;
  time: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  specialRequests?: string;
  agreedToTerms: boolean;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface ServiceType {
  id: string;
  name: string;
  description: string;
  duration: string;
  priceRange?: string;
}
