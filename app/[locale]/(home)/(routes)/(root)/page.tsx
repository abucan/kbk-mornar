import type { Metadata } from 'next';
import { Hero } from '@/app/(home)/(routes)/_components/hero';
import { Blog } from '@/app/(home)/(routes)/_components/blog';
import { Gallery } from '@/app/(home)/(routes)/_components/gallery';
import { Contact } from '@/app/(home)/(routes)/_components/contact';
import { AboutUs } from '@/app/(home)/(routes)/_components/about-us';
import { Schedule } from '@/app/(home)/(routes)/_components/schedule';
import { Trainers } from '@/app/(home)/(routes)/_components/trainers';
import { MobileHero } from '@/app/(home)/(routes)/_components/mobile-hero';
import { FeaturedFighter } from '@/app/(home)/(routes)/_components/featured-fighter';

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
      canonical: '/en',
      languages: {
        hr: '/',
        en: '/en',
        'x-default': '/',
      },
    },
  };
}

const LocaleRootPage = async () => {
  return (
    <>
      <Hero />
      <MobileHero />
      <AboutUs />
      <Trainers />
      <FeaturedFighter />
      <Blog />
      <Gallery />
      <Schedule />
      <Contact />
    </>
  );
};

export default LocaleRootPage;
