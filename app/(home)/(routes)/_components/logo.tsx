import Image from 'next/image';
import logo from '@/public/logo.svg';

interface LogoProps {
  width?: number;
  isFooter?: boolean;
}

export const Logo = ({ width = 100, isFooter }: LogoProps) => {
  return (
    <a>
      <Image
        src={logo}
        width={width}
        alt='KBK Mornar Logo'
        priority
        className={`${isFooter ? 'mx-auto' : ''}`}
      />
    </a>
  );
};
