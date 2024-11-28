import { Hero } from "../_components/hero";
import { Blog } from "../_components/blog";
import { Contact } from "../_components/contact";
import { AboutUs } from "../_components/about-us";
import { Schedule } from "../_components/schedule";
import { Trainers } from "../_components/trainers";
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
      <AboutUs />
      <Trainers trainers={trainersFromDB} />
      <Blog />
      <Schedule />
      <Contact />
    </>
  );
};

export default RootPage;
