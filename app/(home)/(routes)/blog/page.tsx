import type { Metadata } from 'next';
import { Header } from '../_components/header';
import { BlogExpandableCard } from '@/components/blog-expandable-card';
import { getDictionary } from '@/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: '/blog',
      languages: {
        hr: '/blog',
        en: '/en/blog',
        'x-default': '/blog',
      },
    },
  };
}

const BlogPage = async () => {
  const dictionary = getDictionary('hr');

  return (
    <section className='py-8 sm:py-16 relative bg-slate-100' id='novosti'>
      <Header
        title={dictionary.blog.headerTitle}
        description={dictionary.blog.headerDescription}
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16'>
        <BlogExpandableCard />
      </div>
    </section>
  );
};

export default BlogPage;
