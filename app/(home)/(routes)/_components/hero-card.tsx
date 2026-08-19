"use client";
import { motion } from "framer-motion";
import { HeroCardItem } from "./hero-card-item";
import { heroContainer, heroItem } from "@/utils/animations";
import { Dumbbell, Sun, Trophy } from "lucide-react";
import { Aperture } from "lucide-react";
import { useI18n } from "@/components/providers/i18n-provider";

export const HeroCard = () => {
  const { dictionary } = useI18n();
  const heroIcons = [Dumbbell, Sun, Aperture, Trophy];

  return (
    <motion.div
      variants={heroContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-flow-col grid-rows-2 sm:grid-rows-1 place-items-center py-6 px-6 sm:px-12 space-x-6 sm:space-x-10 rounded-none shadow-lg border bg-card text-card-foreground"
    >
      {dictionary.heroItems.map((title, index) => {
        const Icon = heroIcons[index];

        return (
          <motion.li key={title} variants={heroItem} className="list-none">
            <HeroCardItem title={title} image={Icon} itemIndex={index} key={title} />
          </motion.li>
        );
      })}
    </motion.div>
  );
};
