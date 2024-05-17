'use client';

import { SendEmailForm } from '@/components/send-email-form';
import { Map } from './map';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail />,
      contact: 'dariojurisic@kbk-mornar.hr',
    },
    {
      icon: <Phone />,
      contact: '091 540 1195',
    },
    {
      icon: <MapPin />,
      contact: 'Poljud, Split, Hrvatska',
    },
  ];
  return (
    <main className='mt-32 py-16 bg-slate-100'>
      <div className='max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8'>
        <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
          <div className='max-w-lg space-y-3'>
            <h3 className='text-indigo-600 font-semibold uppercase text-sm'>
              Dodatne informacije
            </h3>
            <p className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
              Pošaljite nam poruku!
            </p>
            <p>
              Kontaktirajte nas u slučaju bilo kakvih pitanja. Ispunite formu i
              pošaljite nam poruku. Odgovorit ćemo u najkraćem mogućem roku.
            </p>
            <div>
              <ul className='mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center'>
                {contactMethods.map((item, idx) => (
                  <li key={idx} className='flex items-center gap-x-3'>
                    <div className='flex-none text-gray-400'>{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Map />
          </div>
          <div className='flex-1 sm:max-w-lg lg:max-w-md grid place-items-center'>
            <Card className='p-8 w-[450px]'>
              <SendEmailForm />
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};
