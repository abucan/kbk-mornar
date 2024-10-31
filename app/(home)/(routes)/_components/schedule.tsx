'use client';
import { Header } from './header';
import { motion } from 'framer-motion';
import { ScheduleItem } from './schedule-item';
import { GYM_SCHEDULE } from '@/utils/gym-schedule';
import { sectionContainer, sectionItem } from '@/utils/animations';

export const Schedule = () => {
  return (
    <section className='relative pt-16 sm:pt-32' id='schedule'>
      <Header
        title='Raspored treninga'
        description='Pogledajte raspored treninga i pronađite najbolji termin za sebe.'
      />
      <motion.div
        variants={sectionContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='max-w-screen-xl mx-auto px-4 md:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-16'
      >
        {GYM_SCHEDULE.map((day) => {
          return (
            <motion.div variants={sectionItem} key={day.dayOfWeek}>
              <ScheduleItem day={day} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
