import Image from 'next/image';
import logo from '@/public/logo.svg';

interface LogoProps {
  width?: number;
}

export const Logo = ({ width = 100 }: LogoProps) => {
  return (
    <a href='javascript:void(0)'>
      <Image
        src={logo}
        width={width}
        alt='KBK Mornar Logo'
        priority
      />
    </a>
  );
};
