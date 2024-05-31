'use client';
import { trainers } from '@/utils/trainers';
import { Header } from './header';
import { ShapeDivider } from './shape-divider';
import { TrainerItem, TrainerItemProps } from './trainer-item';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { trainerContainer, trainerItem } from '@/utils/animations';

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
            variants={trainerContainer}
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
          <AnimatePresence mode='wait'>
            {selectedId?.name && (
              <motion.button onClick={() => setSelectedId(null)}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  layoutId={selectedId.title}
                  className='w-[100vw] h-[100vh] fixed top-0 left-0 flex items-center justify-center z-50 bg-black/80'
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className='bg-white p-4 rounded-md shadow-lg max-w-lg relative '
                  >
                    <TrainerItem
                      avatar={selectedId.avatar}
                      name={selectedId.name}
                      desc={selectedId.desc}
                      title={selectedId.title}
                    />
                  </motion.div>
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
