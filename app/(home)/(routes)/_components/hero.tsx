import Image from 'next/image';
import bg1 from '@/public/bg3.jpg';
import { Card } from '@/components/ui/card';
import { Train } from 'lucide-react';

export const Hero = () => {
  return (
    <section className='mx-auto pb-12 items-center lg:flex relative w-full h-[50vh]'>
      <div className='-z-10'>
        <Image
          src={bg1}
          alt='bg1'
          objectFit='cover'
          layout='fill'
          objectPosition='center'
        />
      </div>
      <div className='relative text-white flex items-center justify-start ml-36 w-full'>
        <div className='flex flex-col items-end text-6xl font-extralight'>
          <p>KICKBOXING</p>
          <p>MUAY-THAI</p>
          <p>SPLIT</p>
        </div>
      </div>
      {/* <div className='custom-shape-divider-bottom-1714648985'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
            className='shape-fill'
          ></path>
        </svg>
      </div> */}
    </section>
  );
};
