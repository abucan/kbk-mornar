"use client";
import Image from "next/image";
import bg_1 from "@/public/bg_1.png";
import { motion } from "framer-motion";
import { HeroCardItem } from "./hero-card-item";
import { heroItem, mobileHeroContainer } from "@/utils/animations";
import { Aperture, Dumbbell, Sun, Trophy } from "lucide-react";
import { useI18n } from "@/components/providers/i18n-provider";

export const MobileHero = () => {
  const { dictionary } = useI18n();
  const heroIcons = [Dumbbell, Sun, Aperture, Trophy];

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
          className="grid p-8 grid-flow-col grid-rows-1 place-items-center gap-6 rounded-none border bg-card text-card-foreground"
        >
          {dictionary.heroItems.map((title, index) => {
            const Icon = heroIcons[index];
            return (
              <motion.li
                key={title}
                variants={heroItem}
                className="list-none"
              >
                <HeroCardItem
                  title={title}
                  image={Icon}
                  itemIndex={index}
                  key={title}
                />
              </motion.li>
            );
          })}
        </motion.div>
      </div>
      <div className="-z-10 absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </section>
  );
};
