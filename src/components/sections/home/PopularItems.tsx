"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sectionCopy } from "@/data/content";
import { popularItems } from "@/data/menu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FoodCard } from "@/components/ui/FoodCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion/Reveal";

export function PopularItems() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const syncButtons = useCallback((api: NonNullable<typeof emblaApi>) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => syncButtons(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    queueMicrotask(onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, syncButtons]);

  return (
    <SectionWrapper id="popular" className="bg-white">
      <Container>
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow={sectionCopy.popular.eyebrow}
              heading={sectionCopy.popular.heading}
              body={sectionCopy.popular.body}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                aria-label="Previous popular items"
                disabled={!canPrev}
                onClick={() => emblaApi?.scrollPrev()}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                aria-label="Next popular items"
                disabled={!canNext}
                onClick={() => emblaApi?.scrollNext()}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y gap-4 sm:gap-5">
            {popularItems.map((item, index) => (
              <div
                key={item.id}
                className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_31%]"
              >
                <Reveal delay={index * 0.06}>
                  <FoodCard item={item} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
