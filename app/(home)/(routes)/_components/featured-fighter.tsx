"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";
import { HELENA_TEXT } from "@/utils/strings";
import { GalleryCarousel } from "./gallery-carousel";

export const FeaturedFighter = () => {
  const formattedHelenaText = HELENA_TEXT.replace(/\n/g, "<br>");

  return (
    <section
      className="py-8 sm:py-16 relative mt-16 sm:mt-32 bg-[#F1F5F9]"
      id="about-us"
    >
      <div>
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center sm:px-4 md:px-0 flex md:justify-between flex-col-reverse md:flex-row-reverse gap-8">
            <motion.div
              variants={fadeIn("right", 0.35)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <GalleryCarousel
                description="Helena Jurišić"
                images={["/helena.jpeg", "/helena2.jpeg"]}
                withCard={false}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.35)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="max-w-xl px-4 space-y-4 sm:px-0 lg:max-w-2xl"
            >
              <h3 className="text-black font-semibold text-start md:text-center lg:text-left max-w-md">
                NAJUSPJEŠNIJA SPORTAŠICA HRVATSKE U NEOLIMPIJSKIM SPORTOVIMA ZA
                2024.
              </h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl border-l-8 rounded-lg border-[#e08639] pl-2">
                HELENA JURIŠIĆ
              </p>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: formattedHelenaText }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
