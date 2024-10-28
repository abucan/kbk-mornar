import { Hero } from '../_components/hero';
import { AboutUs } from '../_components/about-us';
import { Blog } from '../_components/blog';
import { Schedule } from '../_components/schedule';
import { Contact } from '../_components/contact';
import { Trainers } from '../_components/trainers';
import { getPosts } from '@/actions/posts.actions';

const RootPage = async () => {
  const posts = await getPosts();
  return (
    <>
      <Hero />
      <AboutUs />
      <Trainers />
      <Blog posts={posts} />
      <Schedule />
      <Contact />
    </>
  );
};

export default RootPage;
