"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sectionCopy } from "@/data/content";
import { galleryItems } from "@/data/gallery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageRevealCurtain } from "@/components/motion/ImageRevealCurtain";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

export function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || reducedMotion) return;

    const parallaxTargets = grid.querySelectorAll<HTMLElement>("[data-parallax]");
    const animations = Array.from(parallaxTargets).map((target, index) =>
      gsap.to(target, {
        yPercent: index % 2 === 0 ? -8 : 6,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }),
    );

    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, [reducedMotion]);

  return (
    <SectionWrapper id="gallery" className="bg-brand-supporting/50">
      <Container>
        <Reveal>
          <SectionHeading
            className="mb-10"
            eyebrow={sectionCopy.gallery.eyebrow}
            heading={sectionCopy.gallery.heading}
            body={sectionCopy.gallery.body}
          />
        </Reveal>

        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-6 md:gap-5"
        >
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.04}
              className={cn(
                index === 0 && "col-span-2 md:col-span-3 md:row-span-2",
                index === 1 && "col-span-1 md:col-span-2",
                index === 2 && "col-span-1 md:col-span-1",
                index === 3 && "col-span-2 md:col-span-3",
                index === 4 && "col-span-1 md:col-span-2",
                index === 5 && "col-span-1 md:col-span-2",
                index === 6 && "col-span-1 md:col-span-2",
                index === 7 && "col-span-1 md:col-span-2",
              )}
            >
              <ImageRevealCurtain delay={index * 0.03} className="h-full rounded-2xl">
                <div data-parallax={index % 3 === 0 ? "true" : undefined}>
                  <MediaPlaceholder
                    label={item.label}
                    src={item.src}
                    alt={item.alt}
                    aspectRatio={
                      index === 0 ? "3/4" : index === 3 ? "16/9" : item.aspectRatio
                    }
                    className="h-full min-h-[10rem] w-full"
                  />
                </div>
              </ImageRevealCurtain>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
