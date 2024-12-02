"use client";
import { Header } from "./header";
import { ShapeDivider } from "./shape-divider";
import { ExpandableTrainerCard } from "@/components/trainer-expandable-card";

export const Trainers = ({ trainers }: { trainers: any }) => {
  return (
    <section className="pt-32 sm:pt-48 relative" id="trainers">
      <Header
        title="Upoznajte naše trenere"
        description="Naši iskusni i certificirani treneri predani su vašem napretku, pružajući stručnu podršku i motivaciju na svakom koraku vašeg sportskog puta."
      />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16">
        <ExpandableTrainerCard cards={trainers} />
      </div>
      <ShapeDivider />
    </section>
  );
};
