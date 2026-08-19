'use client';

import { Header } from "./header";
import { BlogExpandableCard } from "@/components/blog-expandable-card";
import { useI18n } from "@/components/providers/i18n-provider";

export const Blog = () => {
  const { dictionary } = useI18n();

  return (
    <section className="pt-16 sm:pt-32 relative" id="blog">
      <Header
        title={dictionary.blog.headerTitle}
        description={dictionary.blog.headerDescription}
        isRightSide
      />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16">
        <BlogExpandableCard />
      </div>
    </section>
  );
};
