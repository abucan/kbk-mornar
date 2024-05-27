'use client';
import { trainers } from '@/utils/trainers';
import { Header } from './header';
import { ShapeDivider } from './shape-divider';
import { TrainerItem, TrainerItemProps } from './trainer-item';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { delayChildren, trainerItem } from '@/utils/animations';

export const Trainers = () => {
  const [selectedId, setSelectedId] = useState<TrainerItemProps | null>(null);

  return (
    <section className='pt-32 relative' id='treneri'>
      <Header
        title='Upoznajte naše trenere'
        description='Naši iskusni i certificirani treneri predani su vašem napretku, pružajući stručnu podršku i motivaciju na svakom koraku vašeg sportskog puta.'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='mt-8 sm:mt-16'>
          <motion.ul
            variants={delayChildren}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'
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
          <AnimatePresence>
            {selectedId?.name && (
              <motion.button onClick={() => setSelectedId(null)}>
                <motion.div
                  layoutId={selectedId.name}
                  className='fixed inset-0 flex items-center justify-center z-50 bg-black/80'
                >
                  <div className='bg-white p-4 rounded-md shadow-lg max-w-lg relative'>
                    <TrainerItem
                      avatar={selectedId.avatar}
                      name={selectedId.name}
                      desc={selectedId.desc}
                      title={selectedId.title}
                    />
                  </div>
                </motion.div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
      <ShapeDivider />
    </section>
  );
};
