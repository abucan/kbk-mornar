'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import logo from '@/public/logo.svg';
import logo2 from '@/public/muay1.png';
import { useI18n } from '@/components/providers/i18n-provider';
import { getLocalizedHref } from '@/i18n/dictionaries';

export const Logo = ({ width = 100, isFooter = false }: LogoProps) => {
  const { locale } = useI18n();

  return (
    <Link
      className={cn(
        'flex flex-row gap-4 w-full justify-center',
        isFooter && 'justify-center',
        !isFooter && 'sm:justify-start'
      )}
      href={getLocalizedHref('/', locale)}
    >
      <Image
        src={logo}
        width={width}
        alt='KBK Mornar Logo'
        priority
        className='border-r pr-4'
      />
      <Image src={logo2} width={85} alt='KBK Mornar Logo' priority />
    </Link>
  );
};
