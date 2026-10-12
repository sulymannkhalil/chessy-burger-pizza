"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutContent } from "@/data/content";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageRevealCurtain } from "@/components/motion/ImageRevealCurtain";
import { Reveal } from "@/components/motion/Reveal";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    if (!section || !media || reducedMotion) return;

    const animation = gsap.to(media, {
      yPercent: -4,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [reducedMotion]);

  return (
    <SectionWrapper id="about" className="bg-white">
      <div ref={sectionRef} className="relative">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div ref={mediaRef}>
              <ImageRevealCurtain className="rounded-3xl">
                <MediaPlaceholder
                  {...aboutContent.media}
                  className="w-full max-w-md lg:max-w-none"
                  rounded="2xl"
                />
              </ImageRevealCurtain>
            </div>
          </div>

          <div className="space-y-16 lg:space-y-28 lg:py-8">
            <Reveal>
              <SectionHeading heading={aboutContent.heading} />
            </Reveal>
            {aboutContent.blocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.05}>
                <article className="max-w-xl">
                  <h3 className="font-display text-3xl uppercase text-brand-dark sm:text-4xl">
                    {block.title}
                  </h3>
                  <p className="mt-4 font-body text-base leading-relaxed text-brand-dark/75 sm:text-lg">
                    {block.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>
    </SectionWrapper>
  );
}
