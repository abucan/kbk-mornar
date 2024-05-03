import { Navbar } from '../_components/navbar';
import { Hero } from '../_components/hero';
import { AboutUs } from '../_components/about-us';
import { Blog } from '../_components/blog';

const RootPage = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <AboutUs />
      <Blog />
    </div>
  );
};

export default RootPage;
