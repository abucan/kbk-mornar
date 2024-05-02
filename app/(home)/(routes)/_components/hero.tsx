import Image from 'next/image';
import bg1 from '@/public/bg3.jpg';
import { Card } from '@/components/ui/card';
import { RussianRubleIcon, Train } from 'lucide-react';
import { heroItems } from '@/utils/hero-items';
import { Separator } from '@/components/ui/separator';
import sauna from '@/public/sauna.svg';
import massage from '@/public/massage.svg';

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
      <div className='absolute right-1/2 transform translate-x-1/2 -bottom-12'>
        <Card className='grid grid-flow-col grid-rows-2 sm:grid-rows-1 place-items-center py-6 px-12 gap-4 sm:gap-0 sm:space-x-10 rounded-none shadow-lg'>
          {heroItems.map((item, _) => {
            const Icon = item.image;
            return (
              <>
                <div
                  className='flex flex-col items-center justify-center space-y-4'
                  key={item.title}
                >
                  {item.title === 'Sauna' && (
                    <Image
                      src={sauna}
                      alt='Sauna'
                      width={24}
                      height={24}
                    />
                  )}
                  {item.title === 'Masaže' && (
                    <Image
                      src={massage}
                      alt='Sauna'
                      width={24}
                      height={24}
                    />
                  )}
                  {item.title !== 'Sauna' &&
                    item.title !== 'Masaže' && <Icon />}
                  <h2 className='text-base text-center font-[600] font-mono uppercase tracking-widest text-[#e08639]'>
                    {item.title}
                  </h2>
                </div>
              </>
            );
          })}
        </Card>
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
