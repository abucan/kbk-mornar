'use client';
import { useFetchNews } from '@/utils/getNews';
import { BlogCard } from './blog-card';
import { Header } from './header';

export const Blog = () => {
  const { projects } = useFetchNews();

  return (
    <section className='pt-16 sm:pt-32 relative' id='novosti'>
      {/* mt-16 sm:mt-32 py-16 bg-slate-100 */}
      <Header
        title='Novosti iz kluba'
        description='Pogledajte najnovije informacije iz kluba i saznajte više o
              aktivnostima.'
        isRightSide
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <ul className='grid gap-x-8 gap-y-10 mt-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3'>
          {projects &&
            projects.map((item: any) => {
              return (
                <BlogCard
                  title={item.title}
                  info={item.info}
                  image={item.img}
                  key={item.id}
                />
              );
            })}
        </ul>
      </div>
    </section>
  );
};
