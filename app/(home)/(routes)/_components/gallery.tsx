'use client';
import { Header } from './header';
import { GalleryCarousel } from './gallery-carousel';
import { useI18n } from '@/components/providers/i18n-provider';

export const Gallery = () => {
  const { dictionary } = useI18n();

  return (
    <section
      className='mt-16 sm:mt-32 py-8 sm:py-16 relative bg-slate-100'
      id='gallery'
    >
      <Header
        insideContainer
        title={dictionary.gallery.headerTitle}
        description={dictionary.gallery.headerDescription}
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16'>
        {/* Mobile: Vertical stack, Desktop: Horizontal scroll */}
        <div className='flex flex-col gap-6 sm:flex-row sm:overflow-x-auto sm:pb-6 sm:gap-8'>
          {dictionary.gallery.items.map((item) => (
            <div key={item.description} className='sm:w-80 md:w-96 sm:flex-shrink-0'>
              <GalleryCarousel images={item.images} description={item.description} isGallery />
            </div>
          ))}
        </div>

        {/* Optional scroll indicator for desktop */}
        <div className='hidden sm:flex justify-center gap-2 mt-4'>
          <div className='text-xs text-slate-500'>{dictionary.gallery.scrollHint}</div>
        </div>
      </div>
    </section>
  );
};
