import { Header } from '../_components/header';
import { BlogExpandableCard } from '@/components/blog-expandable-card';
import { headers } from 'next/headers';

const BlogPage = async () => {
  const host = headers().get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const url = `${protocol}://${host}`;

  const result = await fetch(`${url}/api/fb`);
  const posts = await result.json();

  return (
    <section className='pt-8 pb-16 relative bg-slate-100' id='novosti'>
      <Header
        title='Novosti iz kluba'
        description='Pogledajte najnovije informacije iz kluba i saznajte više o
            aktivnostima.'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16'>
        <BlogExpandableCard cards={posts.data.slice(0, 15)} />
      </div>
    </section>
  );
};

export default BlogPage;
