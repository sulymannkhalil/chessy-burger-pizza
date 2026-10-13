"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { sectionCopy } from "@/data/content";
import { menuCategories } from "@/data/menu";
import { mediaPaths } from "@/data/media";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageRevealCurtain } from "@/components/motion/ImageRevealCurtain";
import { Reveal } from "@/components/motion/Reveal";

const PREVIEW_CATEGORY_IDS = [
  "burgers",
  "paratha-roll",
  "fries",
  "sandwich",
  "grill",
  "pasta",
  "wrap",
  "shawarma",
] as const;

const CATEGORY_IMAGES: Record<
  (typeof PREVIEW_CATEGORY_IDS)[number],
  { src: string; alt: string }
> = {
  burgers: {
    src: mediaPaths.gallery[4],
    alt: "Chessy burgers",
  },
  "paratha-roll": {
    src: mediaPaths.paratha,
    alt: "Paratha roll",
  },
  fries: {
    src: mediaPaths.gallery[8],
    alt: "Fries",
  },
  sandwich: {
    src: mediaPaths.gallery[1],
    alt: "Sandwich",
  },
  grill: {
    src: mediaPaths.grilled,
    alt: "Grilled food",
  },
  pasta: {
    src: mediaPaths.pasta,
    alt: "Pasta",
  },
  wrap: {
    src: mediaPaths.wrapDish,
    alt: "Wrap",
  },
  shawarma: {
    src: mediaPaths.shawarma,
    alt: "Shawarma",
  },
};

const SLIDE_MS = 3000;

function useCanHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return canHover;
}

export function MenuPreview() {
  const previewCategories = useMemo(
    () =>
      PREVIEW_CATEGORY_IDS.map(
        (id) => menuCategories.find((category) => category.id === id)!,
      ),
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const canHover = useCanHover();
  const reducedMotion = usePrefersReducedMotion();
  const slideTimerRef = useRef<number | null>(null);
  const activeCategory = previewCategories[activeIndex];

  useEffect(() => {
    if (canHover || reducedMotion) {
      if (slideTimerRef.current) {
        window.clearInterval(slideTimerRef.current);
        slideTimerRef.current = null;
      }
      return;
    }

    slideTimerRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % previewCategories.length);
    }, SLIDE_MS);

    return () => {
      if (slideTimerRef.current) {
        window.clearInterval(slideTimerRef.current);
        slideTimerRef.current = null;
      }
    };
  }, [canHover, reducedMotion, previewCategories.length, activeIndex]);

  const selectCategory = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <SectionWrapper id="menu-preview" className="bg-brand-supporting/60">
      <Container>
        <Reveal>
          <SectionHeading
            className="max-w-xl"
            eyebrow={sectionCopy.menuPreview.eyebrow}
            heading={sectionCopy.menuPreview.heading}
            body={sectionCopy.menuPreview.body}
          />
        </Reveal>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <div className="grid auto-rows-fr gap-3 sm:grid-cols-2">
              {previewCategories.map((category, index) => {
                const isActive = index === activeIndex;
                return (
                  <Reveal
                    key={category.id}
                    delay={index * 0.05}
                    className="flex h-full"
                  >
                    <button
                      type="button"
                      onMouseEnter={() => {
                        if (canHover) selectCategory(index);
                      }}
                      onFocus={() => {
                        if (canHover) selectCategory(index);
                      }}
                      onClick={() => selectCategory(index)}
                      className={cn(
                        "flex h-full min-h-[6.75rem] w-full flex-col justify-center rounded-2xl bg-white/80 px-4 py-4 text-left ring-1 ring-brand-dark/8 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                        isActive
                          ? "-translate-y-0.5 bg-brand-primary/40"
                          : "hover:-translate-y-0.5 hover:bg-brand-primary/40",
                      )}
                    >
                      <p className="font-display text-lg uppercase text-brand-dark">
                        {category.name}
                      </p>
                      <p className="mt-1 font-body text-sm text-brand-dark/65">
                        {category.description}
                      </p>
                    </button>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <Button
                href={mediaPaths.menuPdf}
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8"
              >
                View Full Menu
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <ImageRevealCurtain className="rounded-3xl">
              <div className="relative overflow-hidden rounded-3xl bg-brand-dark p-4 sm:p-6">
                <p className="mb-4 font-accent text-lg text-brand-primary">
                  Featured dish
                </p>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-dark/10 bg-brand-supporting">
                  {previewCategories.map((category, index) => {
                    const image =
                      CATEGORY_IMAGES[category.id as keyof typeof CATEGORY_IMAGES];
                    return (
                      <Image
                        key={category.id}
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className={cn(
                          "object-cover object-center",
                          reducedMotion
                            ? index === activeIndex
                              ? "opacity-100"
                              : "opacity-0"
                            : "transition-opacity duration-500 ease-out",
                          !reducedMotion &&
                            (index === activeIndex ? "opacity-100" : "opacity-0"),
                        )}
                      />
                    );
                  })}
                </div>
                <div className="mt-4 text-white">
                  <h3 className="font-display text-2xl uppercase">
                    {activeCategory.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-white/75">
                    {activeCategory.description}
                  </p>
                </div>
              </div>
            </ImageRevealCurtain>
          </Reveal>
        </div>
      </Container>
    </SectionWrapper>
  );
}
