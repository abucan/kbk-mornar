'use client';
import { trainers } from '@/utils/trainers';
import { Header } from './header';
import { ShapeDivider } from './shape-divider';
import { TrainerItem, TrainerItemProps } from './trainer-item';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { trainerContainer, trainerItem } from '@/utils/animations';
import { AnimatedTrainers } from './trainers-animated';

export const Trainers = () => {
  const [selectedId, setSelectedId] = useState<TrainerItemProps | null>(null);
  return (
    <section className='pt-32 relative' id='treneri'>
      <Header
        title='Upoznajte naše trenere'
        description='Naši iskusni i certificirani treneri predani su vašem napretku, pružajući stručnu podršku i motivaciju na svakom koraku vašeg sportskog puta.'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16'>
        <motion.ul
          variants={trainerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8'
        >
          {trainers.map((item, idx) => (
            <motion.div
              variants={trainerItem}
              layoutId={item.name}
              key={idx}
              onClick={() => setSelectedId(item)}
            >
              <TrainerItem
                avatar={item.avatar}
                name={item.name}
                title={item.title}
                key={idx}
              />
            </motion.div>
          ))}
        </motion.ul>
        <AnimatedTrainers
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>
      <ShapeDivider />
    </section>
  );
};
