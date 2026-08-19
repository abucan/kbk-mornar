'use client';
import { Logo } from './logo';
import { useState } from 'react';
import { NavItem } from './nav-item';
import Hamburger from 'hamburger-react';
import { LanguageSwitcher } from './language-switcher';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { useI18n } from '@/components/providers/i18n-provider';
import { getLocalizedHref } from '@/i18n/dictionaries';

export const MobileNavbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { locale, dictionary } = useI18n();

  const handlePress = () => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <nav className='bg-white sticky top-0 z-50 w-full md:text-sm md:hidden h-[90px] flex items-center shadow-md'>
      <div className='items-center px-4 w-full mx-auto md:flex md:px-8'>
        <div className='flex items-center justify-between md:block'>
          <div>
            <Logo />
          </div>
          <div>
            <Sheet open={isOpen} onOpenChange={setOpen}>
              <SheetTrigger className='self-end'>
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
              </SheetTrigger>
              <SheetContent className='flex flex-col' side='right'>
                <ul className='space-y-6 text-center mt-6'>
                  {dictionary.navLinks.map((item, idx) => {
                    return (
                      <NavItem
                        onPress={handlePress}
                        key={idx}
                        idx={idx}
                        path={getLocalizedHref(item.path, locale)}
                        title={item.title}
                      />
                    );
                  })}
                </ul>
                <a
                  href='tel:+385915401195'
                  className='mt-8 text-center font-medium text-gray-700 hover:text-indigo-600 transition-colors'
                >
                  091 540 1195
                </a>
                <ul className='mt-6 flex justify-center'>
                  <LanguageSwitcher onSwitch={handlePress} />
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
