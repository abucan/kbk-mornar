import type { Metadata } from 'next';
import { Hero } from '../_components/hero';
import { Blog } from '../_components/blog';
import { Gallery } from '../_components/gallery';
import { Contact } from '../_components/contact';
import { AboutUs } from '../_components/about-us';
import { Schedule } from '../_components/schedule';
import { Trainers } from '../_components/trainers';
import { MobileHero } from '../_components/mobile-hero';
import { FeaturedFighter } from '../_components/featured-fighter';

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: '/',
      languages: {
        hr: '/',
        en: '/en',
        'x-default': '/',
      },
    },
  };
}

const RootPage = async () => {
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

export default RootPage;
