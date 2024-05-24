'use client';
import { gymSchedule } from '@/utils/gym-schedule';
import { Header } from './header';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { heroContainer, heroItem } from '@/utils/animations';

export const Schedule = () => {
  return (
    <section className='relative pt-16 sm:pt-32' id='raspored'>
      <Header
        title='Raspored treninga'
        description='Pogledajte raspored treninga i pronađite najbolji termin za sebe.'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-16'>
        {gymSchedule.map((day) => {
          return (
            <motion.div variants={heroItem} key={day.dayOfWeek}>
              <Accordion
                type='single'
                collapsible
                className='bg-card text-card-foreground'
                key={day.dayOfWeek}
              >
                <AccordionItem value={`item-${day.dayOfWeek}`}>
                  <AccordionTrigger className='p-4'>
                    {day.dayOfWeek}
                  </AccordionTrigger>
                  <AccordionContent className='p-4 pb-6 space-y-6'>
                    {day.sessions.map((session, index) => {
                      return (
                        <div
                          className='border-l-2 rounded-lg border-[#e08639] pl-2'
                          key={session.name}
                        >
                          <p className='text-base font-semibold'>
                            {session.name}
                          </p>
                          <p className='text-sm font-normal'>
                            {session.trainer}
                          </p>
                          <p className='text-base font-semibold'>
                            {session.time}
                          </p>
                        </div>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
