"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroContent } from "@/data/content";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bgWordRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (reducedMotion) {
      gsap.set([bgWordRef.current, contentRef.current, bgRef.current], {
        clearProps: "all",
        opacity: 1,
        y: 0,
      });
      return;
    }

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power2.out" } });
      const heroItems = contentRef.current?.querySelectorAll("[data-hero-item]");

      intro.from(bgWordRef.current, { opacity: 0, y: 40, duration: 0.9 }, 0);

      if (heroItems?.length) {
        intro.from(
          heroItems,
          { opacity: 0, y: 28, duration: 0.7, stagger: 0.1 },
          0.2,
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

      gsap.to(bgWordRef.current, {
        yPercent: 20,
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
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-20 sm:pt-32"
    >
      <div ref={bgRef} className="absolute inset-0 scale-105">
        <Image
          src={heroContent.backgroundImage.src!}
          alt={heroContent.backgroundImage.alt ?? "Chessy Pizza and Burger"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[78%_center]"
        />
      </div>

      {/* Left-weighted scrim: text stays readable, food stays visible on the right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-dark from-0% via-brand-dark/85 via-35% to-transparent to-78%"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/45"
        aria-hidden
      />

      <p
        ref={bgWordRef}
        className="pointer-events-none absolute left-1/2 top-[14%] z-[1] w-[140%] -translate-x-1/2 text-center font-display text-[20vw] uppercase leading-none text-white/[0.08] select-none sm:top-[10%] sm:text-[16vw]"
        aria-hidden
      >
        {heroContent.backgroundWord}
      </p>

      <Container className="relative z-10 w-full">
        <div ref={contentRef} className="max-w-2xl">
          <p
            data-hero-item
            className="mb-3 font-accent text-2xl text-brand-primary sm:text-3xl"
          >
            Chessy Pizza & Burger
          </p>
          <h1
            data-hero-item
            className="font-display text-5xl uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {heroContent.headline}
          </h1>
          <p
            data-hero-item
            className="mt-5 max-w-lg font-body text-base leading-relaxed text-white/85 sm:text-lg"
          >
            {heroContent.supporting}
          </p>
          <div data-hero-item className="mt-8 flex flex-wrap gap-3">
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
            className="mt-6 font-body text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary"
          >
            {heroContent.supportingInfo}
          </p>
        </div>
      </Container>
    </section>
  );
}
