"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type ImageRevealCurtainProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ImageRevealCurtain({
  children,
  className,
  delay = 0,
}: ImageRevealCurtainProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const curtain = curtainRef.current;
    if (!container || !curtain) return;

    if (reducedMotion) {
      gsap.set(curtain, { scaleY: 0 });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      curtain,
      { scaleY: 1 },
      {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.9,
        delay,
        ease: "power3.inOut",
      },
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [delay, reducedMotion]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      {children}
      <div
        ref={curtainRef}
        className="pointer-events-none absolute inset-0 z-10 origin-top bg-brand-primary"
        aria-hidden
      />
    </div>
  );
}
