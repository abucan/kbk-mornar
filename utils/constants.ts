import { Mail, MapPin, Phone } from 'lucide-react';

export const CONTACT_METHODS = [
  {
    icon: Mail,
    contact: 'dariojurisic@kbk-mornar.hr',
  },
  {
    icon: Phone,
    contact: '091 540 1195',
  },
  {
    icon: MapPin,
    contact: 'Poljud, Split, Hrvatska',
  },
] as const;

export const API_ENDPOINTS = {
  BASE_URL: process.env.NEXT_PUBLIC_ENDPOINT,
  PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
  DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
} as const;
