'use client';
import Image from 'next/image';
import kbkintro from '@/public/kbkintro.jpeg';
import { aboutImage, fadeIn } from '@/utils/animations';
import { motion } from 'framer-motion';

export const AboutUs = () => {
  return (
    <section
      className='relative mt-0 sm:mt-20 bg-[#F1F5F9]'
      id='onama'
    >
      <div className='py-16'>
        <div className='max-w-screen-xl mx-auto md:px-8'>
          <div className='items-center gap-x-12 sm:px-4 md:px-0 lg:flex'>
            <motion.div
              variants={fadeIn('right', 0.25)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true }}
            >
              <Image
                src={kbkintro}
                className='md:max-w-lg rounded-md shadow-md px-4 sm:px-0'
                alt='Intro'
              />
            </motion.div>
            <motion.div
              variants={fadeIn('left', 0.25)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true }}
              className='max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl'
            >
              <h3 className='text-indigo-600 font-semibold'>
                KBK MORNAR SPLIT
              </h3>
              <p className='text-gray-800 text-3xl font-semibold sm:text-4xl border-l-8 rounded-lg border-[#e08639] pl-2'>
                O nama
              </p>
              <p className='mt-3 text-gray-600'>
                Dobrodošli na stranicu Kluba borilačkih sportova
                Mornar Split! Naš klub, s iskusnim trenerima, pruža
                vrhunsku obuku u boksu, kickboxingu, muay thai i
                drugim disciplinama. Ponosimo se našim uspjesima i
                vrijednostima poput discipline i poštovanja. KBK
                Mornar Split otvoren je za sve uzraste i razine
                iskustva, nudeći programe prilagođene vašim ciljevima.
                Pridružite nam se i postanite dio naše sportske
                obitelji!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
