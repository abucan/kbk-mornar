'use client';
import { navLinks } from '@/utils/nav-links';
import { Logo } from './logo';
import facebook from '@/public/facebook.svg';
import instagram from '@/public/instagram.svg';
import { Copyright } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { FOOTER_COPYRIGHT, FOOTER_TEXT } from '@/utils/strings';
import { FooterSocialButton } from './footer-social-button';

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
          <p className='leading-relaxed mt-2 text-[15px]'>{FOOTER_TEXT}</p>
        </motion.div>
        <motion.ul
          variants={fadeIn('up', 0.35)}
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
            variants={fadeIn('right', 0.35)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true }}
            className='mt-4 sm:mt-0 flex flex-row space-x-2 items-center justify-center'
          >
            <Copyright className='h-4 w-4 mr-2' />
            {FOOTER_COPYRIGHT}
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.35)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true }}
            className='mt-6 sm:mt-0'
          >
            <ul className='flex items-center justify-center sm:justify-start space-x-4'>
              <FooterSocialButton
                src={facebook}
                alt='Facebook'
                href='https://www.facebook.com/kbkmornar'
              />
              <FooterSocialButton
                src={instagram}
                alt='Instagram'
                href='https://www.instagram.com/gym_kbkmornar_split/?hl=en'
              />
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
