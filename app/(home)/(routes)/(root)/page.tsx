import { Hero } from '../_components/hero';
import { AboutUs } from '../_components/about-us';
import { Blog } from '../_components/blog';
import { Schedule } from '../_components/schedule';
import { Footer } from '../_components/footer';
import { Contact } from '../_components/contact';
import { Trainers } from '../_components/trainers';

const RootPage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Trainers />
      <Blog />
      <Schedule />
      <Contact />
      <Footer />
    </>
  );
};

export default RootPage;
