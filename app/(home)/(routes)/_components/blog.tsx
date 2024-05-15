'use client';
import { useFetchNews } from '@/utils/getNews';
import { BlogCard } from './blog-card';
import { Header } from './header';
import { ShapeDivider } from './shape-divider';

export const Blog = () => {
  const { projects, loading } = useFetchNews();

  return (
    <section className='py-32 relative'>
      <Header
        title='Novosti iz kluba'
        description='Pogledajte najnovije informacije iz kluba i saznajte više o
              aktivnostima.'
        buttonText='Pogledaj Sve'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <ul className='grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3'>
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
