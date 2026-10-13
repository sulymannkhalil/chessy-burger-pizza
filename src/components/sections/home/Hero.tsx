"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { contact } from "@/config/restaurant";
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
      className="relative flex min-h-[100svh] justify-center overflow-hidden pb-8 pt-[48svh] sm:items-end sm:pb-14 sm:pt-32"
    >
      <div ref={bgRef} className="absolute inset-0 origin-top sm:scale-105">
        <Image
          src={mediaPaths.heroBackgroundMobile}
          alt={heroContent.backgroundImage.alt ?? "Chessy Pizza and Burger"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[57%_center] sm:hidden"
        />
        <Image
          src={heroSrc}
          alt={heroContent.backgroundImage.alt ?? "Chessy Pizza and Burger"}
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-top sm:block"
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

      <Container className="relative z-10 flex w-full justify-center">
        <div
          ref={contentRef}
          className="mx-auto flex w-full max-w-3xl flex-col items-center px-1 text-center sm:max-w-5xl sm:px-0"
        >
          <h1
            data-hero-item
            className="mx-auto w-full text-center text-balance font-display text-[clamp(1.65rem,7.4vw,5.5rem)] uppercase leading-[0.95] tracking-tight text-white sm:mt-0 sm:whitespace-nowrap sm:text-[clamp(1.75rem,4.8vw,4.75rem)] sm:leading-[0.92]"
          >
            {heroContent.headline}
          </h1>
          <p
            data-hero-item
            className="mx-auto mt-4 max-w-lg font-body text-lg leading-relaxed text-white/90 sm:mt-5 sm:text-lg"
          >
            {heroContent.supporting}
          </p>
          <div
            data-hero-item
            className="mt-6 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-8 [&_a]:min-h-12 [&_a]:px-7 [&_a]:text-base sm:[&_a]:min-h-0 sm:[&_a]:px-6 sm:[&_a]:text-lg"
          >
            <Button
              href={contact.whatsappHref}
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#1ebe57] focus-visible:ring-[#25D366]"
            >
              {heroContent.exploreCta}
            </Button>
            <Button
              href={contact.mapsDirectionsUrl}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="border-white text-white hover:bg-white hover:text-brand-dark"
            >
              {heroContent.visitCta}
            </Button>
          </div>
          <p
            data-hero-item
            className="mx-auto mt-5 flex max-w-md items-start justify-center gap-2 font-body text-base font-semibold uppercase tracking-[0.14em] text-brand-primary sm:mt-6 sm:max-w-xl sm:text-sm"
          >
            <MapPin
              className="mt-0.5 h-4 w-4 shrink-0 sm:h-3.5 sm:w-3.5"
              aria-hidden
            />
            <span>{heroContent.supportingInfo}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
