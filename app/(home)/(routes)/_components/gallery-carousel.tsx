"use client";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const GalleryCarousel = ({
  images,
  description,
  withCard = true,
  isGallery = false,
}: GalleryCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="w-full">
      {isGallery && (
        <p className="text-muted-foreground mb-4 text-left">{description}</p>
      )}
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              {withCard ? (
                <Card>
                  <CardContent className="flex aspect-[3/2] items-center justify-center p-6">
                    <Image
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      width={600}
                      height={400}
                      className="object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              ) : (
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-cover rounded-md px-6 aspect-square"
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>
      </Carousel>
      {!isGallery && (
        <p className="text-muted-foreground mt-1 text-center">{description}</p>
      )}
    </div>
  );
};
