"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroContent } from "@/data/content";
import { mediaPaths } from "@/data/media";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [heroSrc, setHeroSrc] = useState<string>(
    heroContent.backgroundImage.src ?? mediaPaths.heroBackgroundFallback,
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (reducedMotion) {
      gsap.set([contentRef.current, bgRef.current], {
        clearProps: "all",
        opacity: 1,
        y: 0,
      });
      return;
    }

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power2.out" } });
      const heroItems = contentRef.current?.querySelectorAll("[data-hero-item]");

      if (heroItems?.length) {
        intro.from(
          heroItems,
          { opacity: 0, y: 28, duration: 0.7, stagger: 0.1 },
          0,
        );
      }

      gsap.to(bgRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] items-end justify-center overflow-hidden pb-8 pt-24 sm:pb-14 sm:pt-32"
    >
      <div ref={bgRef} className="absolute inset-0 origin-top sm:scale-105">
        <Image
          src={heroSrc}
          alt={heroContent.backgroundImage.alt ?? "Chessy Pizza and Burger"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%] sm:object-top"
          onError={() => {
            if (heroSrc !== mediaPaths.heroBackgroundFallback) {
              setHeroSrc(mediaPaths.heroBackgroundFallback);
            }
          }}
        />
      </div>

      {/* Keep mobile overlay light so the hero photo stays visible */}
      <div
        className="absolute inset-0 bg-brand-dark/10 sm:bg-brand-dark/20"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/25 to-transparent to-70% sm:from-brand-dark/90 sm:via-brand-dark/45 sm:to-55%"
        aria-hidden
      />

      <Container className="relative z-10 w-full">
        <div
          ref={contentRef}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <h1
            data-hero-item
            className="mt-10 whitespace-nowrap font-display text-[clamp(1.35rem,5.2vw,5.5rem)] uppercase leading-[0.92] tracking-tight text-white sm:mt-24"
          >
            {heroContent.headline}
          </h1>
          <p
            data-hero-item
            className="mt-4 max-w-lg font-body text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg"
          >
            {heroContent.supporting}
          </p>
          <div
            data-hero-item
            className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8"
          >
            <Button href="/menu" size="lg">
              {heroContent.exploreCta}
            </Button>
            <Button
              href="/#contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-dark"
            >
              {heroContent.visitCta}
            </Button>
          </div>
          <p
            data-hero-item
            className="mt-5 font-body text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary sm:mt-6"
          >
            {heroContent.supportingInfo}
          </p>
        </div>
      </Container>
    </section>
  );
}
