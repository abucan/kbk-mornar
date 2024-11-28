"use client";
import { motion } from "framer-motion";
import { HERO_ITEMS } from "@/utils/hero-items";
import { HeroCardItem } from "./hero-card-item";
import { heroContainer, heroItem } from "@/utils/animations";

export const HeroCard = () => {
  return (
    <motion.div
      variants={heroContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-flow-col grid-rows-2 sm:grid-rows-1 place-items-center py-6 px-6 sm:px-12 gap-4 sm:gap-0 sm:space-x-10 rounded-none shadow-lg border bg-card text-card-foreground"
    >
      {HERO_ITEMS.map((item, _) => {
        const Icon = item.image;
        return (
          <motion.li key={item.title} variants={heroItem} className="list-none">
            <HeroCardItem title={item.title} image={Icon} key={item.title} />
          </motion.li>
        );
      })}
    </motion.div>
  );
};
