import type { Metadata } from 'next';
import { Header } from '@/app/(home)/(routes)/_components/header';
import { BlogExpandableCard } from '@/components/blog-expandable-card';
import { getDictionary, isLocale } from '@/i18n/dictionaries';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (params.locale !== 'en') {
    return {};
  }

  return {
    alternates: {
      canonical: '/en/blog',
      languages: {
        hr: '/blog',
        en: '/en/blog',
        'x-default': '/blog',
      },
    },
  };
}

const LocaleBlogPage = async ({
  params,
}: {
  params: { locale: string };
}) => {
  if (!isLocale(params.locale) || params.locale === 'hr') {
    notFound();
  }

  const dictionary = getDictionary(params.locale);

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

export default LocaleBlogPage;
