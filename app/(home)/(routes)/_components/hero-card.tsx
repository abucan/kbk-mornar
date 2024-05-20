'use client';
import { heroItems } from '@/utils/hero-items';
import { HeroCardItem } from './hero-card-item';
import { motion } from 'framer-motion';

export const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='grid grid-flow-col grid-rows-2 sm:grid-rows-1 place-items-center py-6 px-12 gap-4 sm:gap-0 sm:space-x-10 rounded-none shadow-lg border bg-card text-card-foreground'
    >
      {heroItems.map((item, _) => {
        const Icon = item.image;
        return (
          <HeroCardItem title={item.title} image={Icon} key={item.title} />
        );
      })}
    </motion.div>
  );
};
