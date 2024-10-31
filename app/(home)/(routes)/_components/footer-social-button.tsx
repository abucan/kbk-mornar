import Image from 'next/image';
import { motion } from 'framer-motion';
import { buttonHover } from '@/utils/animations';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const FooterSocialButton = ({
  src,
  alt,
  href,
}: {
  src: string | StaticImport;
  alt: string;
  href: string;
}) => {
  return (
    <motion.li
      variants={buttonHover}
      whileHover={'show'}
      className='w-10 h-10 border rounded-full flex items-center justify-center'
    >
      <a href={href} target='_blank'>
        <Image src={src} alt={alt} />
      </a>
    </motion.li>
  );
};
