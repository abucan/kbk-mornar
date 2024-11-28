import { Hero } from "../_components/hero";
import { Blog } from "../_components/blog";
import { Contact } from "../_components/contact";
import { AboutUs } from "../_components/about-us";
import { Schedule } from "../_components/schedule";
import { Trainers } from "../_components/trainers";
import { getTrainersFromDB } from "@/actions/trainers.actions";
import { headers } from "next/headers";

const RootPage = async () => {
  let trainersFromDB = [];
  let posts = { data: [] };

  try {
    trainersFromDB = await getTrainersFromDB();
  } catch (error) {
    console.error("Error fetching trainers:", error);
  }

  try {
    const host = headers().get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const url = `${protocol}://${host}`;

    const result = await fetch(`${url}/api/fb`, {
      cache: "no-store",
    });

    if (!result.ok) {
      throw new Error(`Failed to fetch posts: ${result.status}`);
    }

    posts = await result.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

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
