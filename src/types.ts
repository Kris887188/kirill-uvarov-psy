export type Language = 'ru' | 'en' | 'nl';

export interface User {
  id: number;
  email: string;
  name: string;
  role: 'admin' | 'client';
  phone?: string;
}

export interface Pricing {
  id: number;
  service_name_ru: string;
  service_name_en: string;
  service_name_nl: string;
  price: number;
  currency: string;
  duration_minutes: number;
}

export interface Availability {
  id: number;
  day_of_week: number;
  start_time: string;
  end_time: string;
  is_active: number;
}

export interface Booking {
  id: number;
  client_id: number;
  client_name?: string;
  start_time: string;
  end_time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
}

export interface Assignment {
  id: number;
  client_id: number;
  title: string;
  description?: string;
  file_url?: string;
  status: 'assigned' | 'completed';
  response_text?: string;
  response_file_url?: string;
  created_at: string;
}
