"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  notifyScrollListeners,
  setLenisInstance,
} from "@/lib/smooth-scroll";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const onNativeScroll = () => notifyScrollListeners();

    if (reducedMotion) {
      setLenisInstance(null);
      window.addEventListener("scroll", onNativeScroll, { passive: true });
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh();
      return () => {
        window.removeEventListener("scroll", onNativeScroll);
      };
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    setLenisInstance(lenis);
    lenis.on("scroll", () => {
      ScrollTrigger.update();
      notifyScrollListeners();
    });

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      setLenisInstance(null);
      ScrollTrigger.refresh();
    };
  }, [reducedMotion]);

  return children;
}
