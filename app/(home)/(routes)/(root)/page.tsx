import { Hero } from '../_components/hero';
import { AboutUs } from '../_components/about-us';
import { Blog } from '../_components/blog';
import { Schedule } from '../_components/schedule';
import { Contact } from '../_components/contact';
import { Trainers } from '../_components/trainers';
import { getPostsFromDB } from '@/actions/posts.actions';

const RootPage = async () => {
  const postsFromDB = await getPostsFromDB();
  return (
    <>
      <Hero />
      <AboutUs />
      <Trainers />
      <Blog posts={postsFromDB} />
      <Schedule />
      <Contact />
    </>
  );
};

export default RootPage;
