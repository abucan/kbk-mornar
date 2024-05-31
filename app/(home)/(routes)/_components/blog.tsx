'use client';
import { useFetchNews } from '@/utils/getNews';
import { BlogCard } from './blog-card';
import { Header } from './header';
import { AnimatePresence, motion } from 'framer-motion';
import { trainerContainer, trainerItem } from '@/utils/animations';
import { useState } from 'react';
import { BlogCardDetails } from './blog-card-details';

// carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const Blog = () => {
  const { projects } = useFetchNews();
  const [selectedId, setSelectedId] = useState<any | null>(null);

  return (
    <section className='pt-16 sm:pt-32 relative' id='novosti'>
      <Header
        title='Novosti iz kluba'
        description='Pogledajte najnovije informacije iz kluba i saznajte više o
              aktivnostima.'
        isRightSide
      />
      <motion.div
        variants={trainerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='max-w-screen-xl mx-auto px-4 md:px-8 flex justify-center'
      >
        <Carousel className='w-full max-w-xs lg:max-w-4xl xl:max-w-5xl mt-8 md:mt-16'>
          <CarouselContent className='-ml-2'>
            {projects &&
              projects.map((item: any) => {
                return (
                  <CarouselItem key={item.title} className='lg:basis-1/3 pl-4'>
                    <motion.li
                      variants={trainerItem}
                      className='list-none'
                      key={item.title}
                      layoutId={item.title}
                      onClick={() => setSelectedId(item)}
                    >
                      <BlogCard
                        title={item.title}
                        info={item.info}
                        image={item.img}
                      />
                    </motion.li>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <AnimatePresence>
            {selectedId?.title && (
              <motion.button onClick={() => setSelectedId(null)}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  layoutId={selectedId.title + '1'}
                  className='fixed inset-0 flex items-center justify-center z-50 bg-black/80'
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className='max-w-4xl'
                  >
                    <BlogCardDetails
                      title={selectedId.title}
                      info={selectedId.info}
                      image={selectedId.img}
                    />
                  </motion.div>
                </motion.div>
              </motion.button>
            )}
          </AnimatePresence>
        </Carousel>
      </motion.div>
    </section>
  );
};
