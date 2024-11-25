import { Hero } from '../_components/hero';
import { Blog } from '../_components/blog';
import { Contact } from '../_components/contact';
import { AboutUs } from '../_components/about-us';
import { Schedule } from '../_components/schedule';
import { Trainers } from '../_components/trainers';
import { getPostsFromDB } from '@/actions/posts.actions';
import { getTrainersFromDB } from '@/actions/trainers.actions';
import { revalidatePath } from 'next/cache';

const RootPage = async () => {
  const postsFromDB = await getPostsFromDB();
  const trainersFromDB = await getTrainersFromDB();

  const postsFromFB = await fetch('http://localhost:3000/api/fb');
  const postsFromFBData = await postsFromFB.json();
  console.log(postsFromFBData);

  return (
    <>
      <Hero />
      <AboutUs />
      <Trainers trainers={trainersFromDB} />
      <Blog posts={postsFromFBData.data.slice(0, 3)} />
      <Schedule />
      <Contact />
    </>
  );
};

export default RootPage;
