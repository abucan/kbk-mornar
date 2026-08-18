import { Mail, MapPin, Phone } from 'lucide-react';

type ContactMethod = {
  icon: typeof Mail;
  contact: string;
  href?: string;
};

export const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: Mail,
    contact: 'dariojurisic@kbk-mornar.hr',
  },
  {
    icon: Phone,
    contact: '091 540 1195',
    href: 'tel:+385915401195',
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
