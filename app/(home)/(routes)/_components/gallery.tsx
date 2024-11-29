"use client";
import * as React from "react";
import { Header } from "./header";
import { IMAGES } from "@/utils/images";
import { GalleryCarousel } from "./gallery-carousel";

export const Gallery = () => {
  return (
    <section
      className="mt-16 sm:mt-32 py-16 relative bg-slate-100"
      id="gallery"
    >
      <Header
        title="Galerija"
        description="Pregledajte trenutke iz naših treninga, događanja i svakodnevnih aktivnosti. Inspirirajte se našom energijom i zajedništvom!"
      />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4">
          <GalleryCarousel images={IMAGES} description="Opis galerije slika" />
          <GalleryCarousel images={IMAGES} description="Opis galerije slika" />
          <GalleryCarousel images={IMAGES} description="Opis galerije slika" />
        </div>
      </div>
    </section>
  );
};
