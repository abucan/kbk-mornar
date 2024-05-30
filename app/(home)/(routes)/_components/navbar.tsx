'use client';
import { useState } from 'react';
import { NavItem } from './nav-item';
import { HamMenu } from './ham-menu';
import { navLinks } from '@/utils/nav-links';
import { Logo } from './logo';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

export const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <nav className='bg-transparent border-b w-full md:static md:text-sm md:border-none'>
      <div className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
        <div className='flex items-center justify-between py-3 md:py-5 md:block'>
          <Logo />
          <div className='md:hidden'>
            <HamMenu setState={setState} state={state} />
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className='justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
            {navLinks.map((item, idx) => {
              return (
                <NavItem
                  key={idx}
                  idx={idx}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
