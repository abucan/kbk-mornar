'use client';
import { navLinks } from '@/utils/nav-links';
import { Logo } from './logo';
import facebook from '@/public/facebook.svg';
import instagram from '@/public/instagram.svg';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className=''>
      <footer className='text-gray-500 bg-white px-4 py-16 max-w-screen-xl mx-auto md:px-8'>
        <div className='max-w-lg sm:mx-auto sm:text-center'>
          <Logo width={128} isFooter />
          <p className='leading-relaxed mt-2 text-[15px]'>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <ul className='items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0'>
          {navLinks.map((item, idx) => (
            <li className=' hover:text-gray-800'>
              <a key={idx} href={item.path}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className='mt-8 items-center justify-between sm:flex'>
          <div className='mt-4 sm:mt-0'>
            &copy; 2024 KBK Mornar Split - All rights reserved.
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
