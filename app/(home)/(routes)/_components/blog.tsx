'use client';
import { BlogCard } from './blog-card';
import { Header } from './header';
import { motion } from 'framer-motion';
import { trainerContainer, trainerItem } from '@/utils/animations';
import { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { BlogAnimated } from './blog-animated';
import { usePosts } from '@/actions/get-posts';

export const Blog = () => {
  const [selectedId, setSelectedId] = useState<any | null>(null);

  const { posts } = usePosts();

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
        <Carousel className='w-full max-w-xs lg:max-w-4xl xl:max-w-6xl mt-8 md:mt-16'>
          <CarouselContent className='-ml-2'>
            {posts &&
              posts.map((item: any, index: number) => {
                return (
                  <CarouselItem key={index} className='lg:basis-1/3 pl-4'>
                    <motion.li
                      variants={trainerItem}
                      className='list-none'
                      key={item.title}
                      layoutId={item.title}
                      onClick={() => setSelectedId(item)}
                    >
                      <BlogCard
                        title={item.title}
                        info={item.description}
                        image={item.imageFile?.href}
                      />
                    </motion.li>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <BlogAnimated selectedId={selectedId} setSelectedId={setSelectedId} />
        </Carousel>
      </motion.div>
    </section>
  );
};
