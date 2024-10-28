import { Hero } from '../_components/hero';
import { AboutUs } from '../_components/about-us';
import { Trainers } from '../_components/trainers';
import { Blog } from '../_components/blog';
import { Schedule } from '../_components/schedule';
import { Contact } from '../_components/contact';
import { getPostsFromDB } from '@/actions/posts.actions';
import { getTrainersFromDB } from '@/actions/trainers.actions';

const RootPage = async () => {
  const postsFromDB = await getPostsFromDB();
  const trainersFromDB = await getTrainersFromDB();

  return (
    <>
      <Hero />
      <AboutUs />
      <Trainers trainers={trainersFromDB} />
      <Blog posts={postsFromDB} />
      <Schedule />
      <Contact />
    </>
  );
};

export default RootPage;
