import { Hero } from "../_components/hero";
import { Blog } from "../_components/blog";
import { Gallery } from "../_components/gallery";
import { Contact } from "../_components/contact";
import { AboutUs } from "../_components/about-us";
import { Schedule } from "../_components/schedule";
import { Trainers } from "../_components/trainers";
import { MobileHero } from "../_components/mobile-hero";
import { getTrainersFromDB } from "@/actions/trainers.actions";

const RootPage = async () => {
  let trainersFromDB = [];

  try {
    trainersFromDB = await getTrainersFromDB();
  } catch (error) {
    console.error("Error fetching trainers:", error);
  }

  return (
    <>
      <Hero />
      <MobileHero />
      <AboutUs />
      <Trainers trainers={trainersFromDB} />
      <Blog />
      <Gallery />
      <Schedule />
      <Contact />
    </>
  );
};

export default RootPage;
