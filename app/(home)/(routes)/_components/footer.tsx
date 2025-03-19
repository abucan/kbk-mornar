'use client';
import { Logo } from './logo';
import { motion } from 'framer-motion';
import { Copyright } from 'lucide-react';
import { fadeIn } from '@/utils/animations';
import { NAV_LINKS } from '@/utils/nav-links';
import facebook from '@/public/facebook.svg';
import instagram from '@/public/instagram.svg';
import { FooterSocialButton } from './footer-social-button';
import { FOOTER_COPYRIGHT, FOOTER_TEXT } from '@/utils/strings';
import Image from 'next/image';
import { sponsors } from '@/utils/sponsors';

export const Footer = () => {
  return (
    <div className='py-8 sm:py-16'>
      <div className='text-gray-500 bg-white px-4 max-w-screen-xl mx-auto md:px-8'>
        <motion.div
          variants={fadeIn('up', 0)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true }}
          className='max-w-lg sm:mx-auto text-center space-y-4'
        >
          <Logo width={128} isFooter />
          <p className='leading-relaxed text-[15px]'>{FOOTER_TEXT}</p>
        </motion.div>
        <motion.ul
          variants={fadeIn('up', 0.35)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true }}
          className='items-center justify-center mt-6 sm:mt-8 space-y-6 sm:flex sm:space-x-6 sm:space-y-0 text-center'
        >
          {NAV_LINKS.map((item, idx) => (
            <li className=' hover:text-gray-800' key={idx}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </motion.ul>
        <div className='mt-6 sm:mt-8 items-center justify-between sm:flex'>
          <motion.div
            variants={fadeIn('right', 0.35)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true }}
            className='flex flex-row space-x-2 items-center justify-center'
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
        <div className='max-w-screen-xl mx-auto px-4 md:px-8 mt-8 border-t-2 border-slate-100'>
          <h3 className='text-indigo-600 font-semibold uppercase text-sm text-center mt-8'>
            Donatori/Sponzori
          </h3>
          <div className='flex flex-col sm:flex-row sm:gap-8 w-full items-center justify-center'>
            {sponsors.map((sponsor, index) => (
              <div key={index} className='flex justify-center'>
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={170}
                  height={170}
                  className='object-contain h-24'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
