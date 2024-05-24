'use client';
import { navLinks } from '@/utils/nav-links';
import { Logo } from './logo';
import facebook from '@/public/facebook.svg';
import instagram from '@/public/instagram.svg';
import Image from 'next/image';
import { Copyright } from 'lucide-react';
import { motion } from 'framer-motion';
import { buttonHover, fadeIn } from '@/utils/animations';

export const Footer = () => {
  return (
    <div className=''>
      <div className='text-gray-500 bg-white px-4 py-16 max-w-screen-xl mx-auto md:px-8'>
        <motion.div
          variants={fadeIn('up', 0)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true }}
          className='max-w-lg sm:mx-auto text-center'
        >
          <Logo width={128} isFooter />
          <p className='leading-relaxed mt-2 text-[15px]'>
            Posvećeni smo vašem uspjehu u borilačkim sportovima. Pridružite nam
            se i postanite dio naše zajednice. Za više informacija,
            kontaktirajte nas.
          </p>
        </motion.div>
        <motion.ul
          variants={fadeIn('up', 0.25)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true }}
          className='items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0 text-center'
        >
          {navLinks.map((item, idx) => (
            <li className=' hover:text-gray-800' key={idx}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </motion.ul>
        <div className='mt-8 items-center justify-between sm:flex'>
          <motion.div
            variants={fadeIn('right', 0.25)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true }}
            className='mt-4 sm:mt-0 flex flex-row space-x-2 items-center justify-center'
          >
            <Copyright className='h-4 w-4 mr-2' /> 2024 KBK Mornar Split - All
            rights reserved.
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.25)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true }}
            className='mt-6 sm:mt-0'
          >
            <ul className='flex items-center justify-center sm:justify-start space-x-4'>
              <motion.li
                variants={buttonHover}
                whileHover={'show'}
                className='w-10 h-10 border rounded-full flex items-center justify-center'
              >
                <a href='https://www.facebook.com/kbkmornar' target='_blank'>
                  <Image src={facebook} alt='Facebook' />
                </a>
              </motion.li>
              <motion.li
                variants={buttonHover}
                whileHover={'show'}
                className='w-10 h-10 border rounded-full flex items-center justify-center'
              >
                <a
                  href='https://www.instagram.com/gym_kbkmornar_split/?hl=en'
                  target='_blank'
                >
                  <Image src={instagram} alt='Instagram' />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
