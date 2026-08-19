"use client";
import { Header } from "./header";
import { motion } from "framer-motion";
import { ScheduleItem } from "./schedule-item";
import { sectionContainer, sectionItem } from "@/utils/animations";
import { useI18n } from "@/components/providers/i18n-provider";

export const Schedule = () => {
  const { dictionary } = useI18n();

  return (
    <section className="relative pt-16 sm:pt-32" id="schedule">
      <Header
        title={dictionary.schedule.headerTitle}
        description={dictionary.schedule.headerDescription}
        isRightSide
      />
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto px-4 md:px-8 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-16"
      >
        {dictionary.schedule.days.map((day) => {
          return (
            <motion.div variants={sectionItem} key={day.dayOfWeek}>
              <ScheduleItem day={day} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
