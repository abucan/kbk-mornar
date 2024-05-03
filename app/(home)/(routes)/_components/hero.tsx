import Image from 'next/image';
import hero from '@/public/hero.png';
import { HeroCard } from './hero-card';

export const Hero = () => {
  return (
    <section className='mx-auto pb-12 items-center lg:flex relative w-full h-[50vh]'>
      <div className='-z-10'>
        <Image
          src={hero}
          alt='bg1'
          objectFit='cover'
          layout='fill'
          objectPosition='center'
          quality={100}
        />
      </div>
      <div className='absolute right-1/2 transform translate-x-1/2 sm:-bottom-12'>
        <HeroCard />
      </div>
      <div className='-z-10 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>

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
