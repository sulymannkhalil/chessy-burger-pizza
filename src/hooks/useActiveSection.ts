"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  consumePendingSection,
  setPendingSection,
} from "@/lib/pending-scroll";
import { scrollToSection, subscribeToScroll } from "@/lib/smooth-scroll";

/** Homepage sections used for scroll-spy (top → bottom). */
export const HOME_SECTION_IDS = [
  "hero",
  "popular",
  "menu-preview",
  "about",
  "gallery",
  "reviews",
  "contact",
] as const;

/** Probe line from viewport top — sits just below the fixed navbar. */
const SPY_OFFSET_PX = 120;

function readActiveSectionFromScroll(): string {
  const probeY = window.scrollY + SPY_OFFSET_PX;
  let current: string = HOME_SECTION_IDS[0];

  for (const id of HOME_SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el || el.offsetHeight === 0) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (top <= probeY) current = id;
  }

  return current;
}

function resolveHashTarget(): string | null {
  const pending = consumePendingSection();
  if (pending && document.getElementById(pending)) return pending;

  const hash = window.location.hash.replace(/^#/, "");
  if (hash && document.getElementById(hash)) return hash;

  return null;
}

export function useActiveSection() {
  const pathname = usePathname();
  const [homeActiveSection, setHomeActiveSection] = useState<string>("hero");
  const activeSection = pathname === "/" ? homeActiveSection : "";

  useEffect(() => {
    if (pathname !== "/") return;

    const update = () => {
      setHomeActiveSection(readActiveSectionFromScroll());
    };

    const target = resolveHashTarget();
    let timer: number | undefined;

    if (target) {
      timer = window.setTimeout(() => {
        setHomeActiveSection(target);
        scrollToSection(target);
        window.requestAnimationFrame(update);
      }, 160);
    } else {
      window.requestAnimationFrame(update);
    }

    const unsubscribe = subscribeToScroll(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const onPopState = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash && document.getElementById(hash)) {
        scrollToSection(hash);
        setHomeActiveSection(hash);
        return;
      }
      update();
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      if (timer) window.clearTimeout(timer);
      unsubscribe();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("popstate", onPopState);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const onHashChange = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      scrollToSection(hash);
      setHomeActiveSection(hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return { pathname, activeSection };
}

export function queueSectionNavigation(sectionId: string) {
  setPendingSection(sectionId);
}

export function isNavItemActive(
  href: string,
  pathname: string,
  activeSection: string,
) {
  if (href === "/menu") {
    return pathname === "/menu" || pathname.startsWith("/menu/");
  }

  if (href === "/") {
    return (
      pathname === "/" &&
      (activeSection === "hero" ||
        activeSection === "popular" ||
        activeSection === "menu-preview")
    );
  }

  if (href.startsWith("/#")) {
    if (pathname !== "/") return false;
    const sectionId = href.slice(2);
    return activeSection === sectionId;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
