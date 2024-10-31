'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { Card } from '@/components/ui/card';
import { CONTACT_METHODS } from '@/utils/constants';
import { SendEmailForm } from '@/components/send-email-form';

export const Contact = () => {
  return (
    <main className='mt-16 sm:mt-32 py-16 bg-slate-100' id='contact'>
      <div className='max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8'>
        <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none space-y-4 lg:space-y-0'>
          <motion.div
            variants={fadeIn('right', 0.35)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true }}
            className='max-w-lg space-y-4'
          >
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
                {CONTACT_METHODS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className='flex items-center gap-x-3'>
                      <Icon />
                      <p>{item.contact}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5786.3183454074015!2d16.42338269439156!3d43.51987336637534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355de5b75b811f%3A0xaf24fc6abf0e93b!2sPoljud%2C%20Split!5e0!3m2!1sen!2shr!4v1715941582052!5m2!1sen!2shr'
              className='w-full h-[250px]'
              loading='lazy'
            ></iframe>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.35)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true }}
            className='flex-1 sm:max-w-lg lg:max-w-md grid place-items-center'
          >
            <Card className='p-8 w-full lg:w-[450px] rounded-md shadow-none'>
              <SendEmailForm />
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
