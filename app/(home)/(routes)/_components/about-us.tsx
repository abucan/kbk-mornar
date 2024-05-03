import Image from 'next/image';
import kbkintro from '@/public/kbkintro.jpeg';

export const AboutUs = () => {
  return (
    <section className='relative mt-20'>
      <div className='py-14'>
        <div className='max-w-screen-xl mx-auto md:px-8'>
          <div className='items-center gap-x-12 sm:px-4 md:px-0 lg:flex'>
            <div className='flex-1 sm:hidden lg:block'>
              <Image
                src={kbkintro}
                className='md:max-w-lg sm:rounded-lg'
                alt='Intro'
              />
            </div>
            <div className='max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl'>
              <h3 className='text-indigo-600 font-semibold'>
                KBK MORNAR SPLIT
              </h3>
              <p className='text-gray-800 text-3xl font-semibold sm:text-4xl border-l-8 rounded-lg border-[#e08639] pl-2'>
                O nama
              </p>
              <p className='mt-3 text-gray-600'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum, sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
