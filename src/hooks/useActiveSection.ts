"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HOME_SECTION_IDS = [
  "hero",
  "popular",
  "menu-preview",
  "about",
  "gallery",
  "reviews",
  "contact",
] as const;

export function useActiveSection() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = HOME_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.45, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return { pathname, activeSection };
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
    return pathname === "/" && (activeSection === "hero" || activeSection === "popular");
  }

  if (href.startsWith("/#")) {
    if (pathname !== "/") return false;
    const sectionId = href.slice(2);
    return activeSection === sectionId;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
