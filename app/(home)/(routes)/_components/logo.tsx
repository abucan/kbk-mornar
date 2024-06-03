import Image from 'next/image';
import logo from '@/public/logo.svg';
import logo2 from '@/public/muay1.png';
import { cn } from '@/lib/utils';

interface LogoProps {
  width?: number;
  isFooter?: boolean;
}

export const Logo = ({ width = 100, isFooter = false }: LogoProps) => {
  return (
    <a
      className={cn(
        'flex flex-row gap-4 w-full justify-center',
        isFooter && 'justify-center',
        !isFooter && 'sm:justify-start'
      )}
      href='/'
    >
      <Image
        src={logo}
        width={width}
        alt='KBK Mornar Logo'
        priority
        className='border-r pr-4'
      />
      <Image src={logo2} width={85} alt='KBK Mornar Logo' priority />
    </a>
  );
};
