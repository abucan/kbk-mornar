import { Hero } from '../_components/hero';
import { Blog } from '../_components/blog';
import { Contact } from '../_components/contact';
import { AboutUs } from '../_components/about-us';
import { Schedule } from '../_components/schedule';
import { Trainers } from '../_components/trainers';
import { getTrainersFromDB } from '@/actions/trainers.actions';

const RootPage = async () => {
  const trainersFromDB = await getTrainersFromDB();
  const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/fb`, {
    cache: 'no-store',
  });
  const posts = await result.json();

  return (
    <>
      <Hero />
      <AboutUs />
      <Trainers trainers={trainersFromDB} />
      <Blog posts={posts.data.slice(0, 3)} />
      <Schedule />
      <Contact />
    </>
  );
};

export default RootPage;
