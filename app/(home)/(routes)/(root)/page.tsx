import { Hero } from '../_components/hero';
import { Blog } from '../_components/blog';
import { Contact } from '../_components/contact';
import { AboutUs } from '../_components/about-us';
import { Schedule } from '../_components/schedule';
import { Trainers } from '../_components/trainers';
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
      <Blog posts={postsFromDB.slice(0, 3)} />
      <Schedule />
      <Contact />
    </>
  );
};

export default RootPage;
