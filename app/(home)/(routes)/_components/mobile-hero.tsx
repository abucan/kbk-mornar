"use client";
import Image from "next/image";
import bg_1 from "@/public/bg_1.png";
import { motion } from "framer-motion";
import { HERO_ITEMS } from "@/utils/hero-items";
import { HeroCardItem } from "./hero-card-item";
import { heroItem, mobileHeroContainer } from "@/utils/animations";

export const MobileHero = () => {
  return (
    <section className="flex sm:hidden flex-col mx-auto items-start bg-white justify-start relative w-full h-fit">
      <Image
        src={bg_1}
        alt="bg1"
        objectFit="cover"
        width={1000}
        height={1000}
        quality={100}
      />
      <div className="w-full">
        <motion.div
          variants={mobileHeroContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid p-8 grid-flow-col grid-rows-1 place-items-center gap-4 rounded-none border bg-card text-card-foreground"
        >
          {HERO_ITEMS.map((item, _) => {
            const Icon = item.image;
            return (
              <motion.li
                key={item.title}
                variants={heroItem}
                className="list-none"
              >
                <HeroCardItem
                  title={item.title}
                  image={Icon}
                  key={item.title}
                />
              </motion.li>
            );
          })}
        </motion.div>
      </div>
      <div className="-z-10 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </section>
  );
};
