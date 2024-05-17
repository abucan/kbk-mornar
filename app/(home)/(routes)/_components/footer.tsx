'use client';
import { navLinks } from '@/utils/nav-links';
import { Logo } from './logo';
import facebook from '@/public/facebook.svg';
import instagram from '@/public/instagram.svg';
import Image from 'next/image';
import { Copyright } from 'lucide-react';

export const Footer = () => {
  return (
    <div className=''>
      <footer className='text-gray-500 bg-white px-4 py-16 max-w-screen-xl mx-auto md:px-8'>
        <div className='max-w-lg sm:mx-auto sm:text-center'>
          <Logo width={128} isFooter />
          <p className='leading-relaxed mt-2 text-[15px]'>
            Posvećeni smo vašem uspjehu u borilačkim sportovima. Pridružite nam
            se i postanite dio naše zajednice. Za više informacija,
            kontaktirajte nas.
          </p>
        </div>
        <ul className='items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0'>
          {navLinks.map((item, idx) => (
            <li className=' hover:text-gray-800' key={idx}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className='mt-8 items-center justify-between sm:flex'>
          <div className='mt-4 sm:mt-0 flex flex-row space-x-2 items-center justify-center'>
            <Copyright className='h-4 w-4 mr-2' /> 2024 KBK Mornar Split - All
            rights reserved.
          </div>
          <div className='mt-6 sm:mt-0'>
            <ul className='flex items-center space-x-4'>
              <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
                <a href='https://www.facebook.com/kbkmornar' target='_blank'>
                  <Image src={facebook} alt='Facebook' />
                </a>
              </li>
              <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
                <a
                  href='https://www.instagram.com/gym_kbkmornar_split/?hl=en'
                  target='_blank'
                >
                  <Image src={instagram} alt='Instagram' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
