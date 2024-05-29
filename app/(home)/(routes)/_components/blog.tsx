'use client';
import { useFetchNews } from '@/utils/getNews';
import { BlogCard, BlogCardProps } from './blog-card';
import { Header } from './header';
import { AnimatePresence, motion } from 'framer-motion';
import { heroContainer, heroItem, trainerItem } from '@/utils/animations';
import { useEffect, useState } from 'react';
import { BlogCardDetails } from './blog-card-details';

export const Blog = () => {
  const { projects } = useFetchNews();
  const [selectedId, setSelectedId] = useState<any | null>(null);

  useEffect(() => {
    if (!!selectedId) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [selectedId]);

  return (
    <section className='pt-16 sm:pt-32 relative' id='novosti'>
      {/* mt-16 sm:mt-32 py-16 bg-slate-100 */}
      <Header
        title='Novosti iz kluba'
        description='Pogledajte najnovije informacije iz kluba i saznajte više o
              aktivnostima.'
        isRightSide
      />
      <motion.div
        variants={heroContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='max-w-screen-xl mx-auto px-4 md:px-8'
      >
        <ul className='grid gap-x-8 gap-y-10 mt-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3'>
          {projects &&
            projects.map((item: any) => {
              return (
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
              );
            })}
        </ul>
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
      </motion.div>
    </section>
  );
};
