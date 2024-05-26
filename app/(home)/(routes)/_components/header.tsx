'use client';
import { fadeIn } from '@/utils/animations';
import { motion } from 'framer-motion';

interface HeaderProps {
  title: string;
  description: string;
  isRightSide?: boolean;
}

export const Header = ({
  title,
  description,
  isRightSide = false,
}: HeaderProps) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.25)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: true }}
      className='max-w-screen-xl mx-auto px-4 md:px-8'
    >
      <div
        className={`items-start justify-between py-4 border-b md:flex ${
          isRightSide ? 'flex-row-reverse' : ''
        }`}
      >
        <div
          className={`max-w-2xl flex flex-col items-center ${
            isRightSide ? 'sm:items-end' : 'sm:items-start'
          }`}
        >
          <h3
            className={`text-gray-800 text-3xl font-semibold sm:text-4xl rounded-lg border-[#e08639] ${
              isRightSide ? 'border-r-8 pr-2' : 'border-l-8 pl-2'
            }`}
          >
            {title}
          </h3>
          <p className='text-gray-600 mt-2 text-center sm:text-left'>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
