"use client";
import * as React from "react";
import { Header } from "./header";
import { IMAGES, OLYMPIC_GAMES } from "@/utils/images";
import { GalleryCarousel } from "./gallery-carousel";

export const Gallery = () => {
  return (
    <section
      className="mt-16 sm:mt-32 py-8 sm:py-16 relative bg-slate-100"
      id="gallery"
    >
      <Header
        insideContainer
        title="Galerija"
        description="Pregledajte trenutke iz naših treninga, događanja i svakodnevnih aktivnosti. Inspirirajte se našom energijom i zajedništvom!"
      />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <GalleryCarousel
            images={OLYMPIC_GAMES}
            description="Olimpijske igre Pariz 2024."
            isGallery
          />
      {/* <GalleryCarousel
            images={IMAGES}
            description="Opis galerije slika"
            isGallery
          />
          <GalleryCarousel
            images={IMAGES}
            description="Opis galerije slika"
            isGallery
          /> */}
        </div>
      </div>
    </section>
  );
};
