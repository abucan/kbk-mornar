'use client';
import { useFetchNews } from '@/utils/getNews';
import { BlogCard } from './blog-card';
import { Header } from './header';

export const Blog = () => {
  const { projects, loading } = useFetchNews();

  return (
    <section className='py-16'>
      <Header
        title='Novosti iz kluba'
        description='Pogledajte najnovije informacije iz kluba i saznajte više o
              aktivnostima.'
        buttonText='Pogledaj Sve'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        {/* <div className='space-y-5 sm:text-center sm:max-w-md sm:mx-auto'>
          <h1 className='text-gray-800 text-3xl font-extrabold sm:text-4xl'>
            Novosti iz kluba
          </h1>
          <p className='text-gray-600'>
            Pogledajte najnovije informacije iz kluba i saznajte više o
            aktivnostima.
          </p>
        </div> */}
        <ul className='grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3'>
          {projects &&
            projects.map((item: any) => {
              console.log(projects);

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
