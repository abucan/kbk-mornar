import { Hero } from '../_components/hero';
import { AboutUs } from '../_components/about-us';
import { Blog } from '../_components/blog';
import { Schedule } from '../_components/schedule';
import { Footer } from '../_components/footer';

const RootPage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Blog />
      <Schedule />
      <Footer />
    </>
  );
};

export default RootPage;
