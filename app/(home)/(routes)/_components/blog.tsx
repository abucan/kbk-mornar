import { Header } from "./header";
import { BlogExpandableCard } from "@/components/blog-expandable-card";

export const Blog = () => {
  return (
    <section className="pt-16 sm:pt-32 relative" id="blog">
      <Header
        title="Novosti iz kluba"
        description="Pogledajte najnovije informacije iz kluba i saznajte više o
              aktivnostima."
        isRightSide
      />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16">
        <BlogExpandableCard />
      </div>
    </section>
  );
};
