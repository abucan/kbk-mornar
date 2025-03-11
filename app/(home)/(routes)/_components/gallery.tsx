'use client';
import { Header } from './header';
import {
  ABU_DHABI,
  GOLD_FIGHT,
  GREECE,
  KOSOVO,
  OLYMPIC_GAMES,
  PLACE,
  PORTUGAL,
  THAILAND,
} from '@/utils/images';
import { GalleryCarousel } from './gallery-carousel';

export const Gallery = () => {
  return (
    <section
      className='mt-16 sm:mt-32 py-8 sm:py-16 relative bg-slate-100'
      id='gallery'
    >
      <Header
        insideContainer
        title='Galerija'
        description='Pregledajte trenutke iz naših treninga, događanja i svakodnevnih aktivnosti. Inspirirajte se našom energijom i zajedništvom!'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16'>
        {/* Mobile: Vertical stack, Desktop: Horizontal scroll */}
        <div className='flex flex-col gap-6 sm:flex-row sm:overflow-x-auto sm:pb-6 sm:gap-8'>
          {/* Using width classes that match your original grid layout */}
          <div className='sm:w-80 md:w-96 sm:flex-shrink-0'>
            <GalleryCarousel
              images={PLACE}
              description='Suvereno opremljeni prostor'
              isGallery
            />
          </div>
          <div className='sm:w-80 md:w-96 sm:flex-shrink-0'>
            <GalleryCarousel
              images={GOLD_FIGHT}
              description='Golden Fight - Osijek 2024.'
              isGallery
            />
          </div>
          <div className='sm:w-80 md:w-96 sm:flex-shrink-0'>
            <GalleryCarousel
              images={KOSOVO}
              description='Europsko seniorsko prvenstvo u tajlandskom boksu Priština (Kosovo) 2024.'
              isGallery
            />
          </div>
          <div className='sm:w-80 md:w-96 sm:flex-shrink-0'>
            <GalleryCarousel
              images={OLYMPIC_GAMES}
              description='Olimpijske igre Pariz 2024.'
              isGallery
            />
          </div>
          <div className='sm:w-80 md:w-96 sm:flex-shrink-0'>
            <GalleryCarousel
              images={GREECE}
              description='Svjetsko seniorsko prvenstvo u tajlandskom boksu, Patras (Grčka) 2024.'
              isGallery
            />
          </div>
          <div className='sm:w-80 md:w-96 sm:flex-shrink-0'>
            <GalleryCarousel
              images={PORTUGAL}
              description='Svjetsko prvenstvo kickboxing Albufeira (Portugal) 2023.'
              isGallery
            />
          </div>
          <div className='sm:w-80 md:w-96 sm:flex-shrink-0'>
            <GalleryCarousel
              images={ABU_DHABI}
              description='Svjetsko prvenstvo u tajlandskom boksu Abu Dhabi (UAE) 2022.'
              isGallery
            />
          </div>
          <div className='sm:w-80 md:w-96 sm:flex-shrink-0'>
            <GalleryCarousel
              images={THAILAND}
              description='Svjetsko prvenstvo tajlandski boks Bangkok (Tajland) 2021.'
              isGallery
            />
          </div>
        </div>

        {/* Optional scroll indicator for desktop */}
        <div className='hidden sm:flex justify-center gap-2 mt-4'>
          <div className='text-xs text-slate-500'>← Scroll to see more →</div>
        </div>
      </div>
    </section>
  );
};
