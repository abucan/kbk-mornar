'use client';
import { trainers } from '@/utils/trainers';
import { Header } from './header';
import { ShapeDivider } from './shape-divider';
import { TrainerItem, TrainerItemProps } from './trainer-item';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export const Trainers = () => {
  const [selectedId, setSelectedId] =
    useState<TrainerItemProps | null>(null);

  return (
    <section className='pt-32 relative' id='treneri'>
      <Header
        title='Upoznajte naše trenere'
        description='Naši iskusni i certificirani treneri predani su vašem napretku, pružajući stručnu podršku i motivaciju na svakom koraku vašeg sportskog puta.'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='mt-8 sm:mt-16'>
          <ul className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
            {trainers.map((item, idx) => (
              <motion.div
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
          </ul>
          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId.name}>
                <div>
                  <TrainerItem
                    avatar={selectedId.avatar}
                    name={selectedId.name}
                    desc={selectedId.desc}
                    title={selectedId.title}
                  />
                  <motion.button
                    className='bg-red-500 p-10'
                    onClick={() => setSelectedId(null)}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <ShapeDivider />
    </section>
  );
};
