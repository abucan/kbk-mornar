'use client';
import Image from 'next/image';
import bg_1 from '@/public/bg_1.png';
import { HeroCard } from './hero-card';

export const Hero = () => {
  return (
    <section className='mx-auto pb-12 items-center lg:flex relative w-full h-[50vh] spacer layer1'>
      <div>
        <Image
          src={bg_1}
          alt='bg1'
          objectFit='cover'
          layout='fill'
          className='object-right sm:object-center hidden sm:block'
          quality={100}
        />
      </div>
      <div className='absolute right-1/2 transform translate-x-1/2 translate-y-1/2 sm:translate-y-0 sm:-bottom-12'>
        <HeroCard />
      </div>
      <div className='-z-10 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
    </section>
  );
};
