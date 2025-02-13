"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";
import kbkintro from "@/public/about.png";
import { ABOUT_US_TEXT } from "@/utils/strings";

export const AboutUs = () => {
  return (
    <section
      className="pt-0 pb-8 sm:py-16 relative mt-0 sm:mt-20 bg-[#F1F5F9]"
      id="about-us"
    >
      <div>
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center sm:px-4 md:px-0 md:flex md:justify-between">
            <motion.div
              variants={fadeIn("right", 0.35)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image
                src={kbkintro}
                className="w-full md:max-w-lg sm:rounded-lg shadow-md shadow-[#F1F5F9] sm:px-0"
                alt="Intro"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.35)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="max-w-xl px-4 space-y-4 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl"
            >
              <h3 className="text-black font-semibold text-center lg:text-left">
                KBK MORNAR SPLIT
              </h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl border-l-8 rounded-lg border-[#e08639] pl-2">
                O nama
              </p>
              <p className="text-gray-600">{ABOUT_US_TEXT}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
