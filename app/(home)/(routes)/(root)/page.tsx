import { Hero } from '../_components/hero';
import { Blog } from '../_components/blog';
import { trainerItems } from '@/utils/trainers';
import { Gallery } from '../_components/gallery';
import { Contact } from '../_components/contact';
import { AboutUs } from '../_components/about-us';
import { Schedule } from '../_components/schedule';
import { Trainers } from '../_components/trainers';
import { MobileHero } from '../_components/mobile-hero';
import { FeaturedFighter } from '../_components/featured-fighter';

const RootPage = async () => {
  return (
    <>
      <Hero />
      <MobileHero />
      <AboutUs />
      <Trainers trainers={trainerItems} />
      <FeaturedFighter />
      <Blog />
      <Gallery />
      <Schedule />
      <Contact />
    </>
  );
};

export default RootPage;
