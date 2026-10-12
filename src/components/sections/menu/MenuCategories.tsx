"use client";

import { useEffect, useState } from "react";
import { menuCategories } from "@/data/menu";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

export function MenuCategories() {
  const [activeId, setActiveId] = useState(menuCategories[0]?.id ?? "");

  useEffect(() => {
    const sections = menuCategories
      .map((category) => document.getElementById(category.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[4.75rem] z-40 border-y border-brand-dark/10 bg-white/90 backdrop-blur-xl">
      <Container className="py-3">
        <nav
          aria-label="Menu categories"
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:thin]"
        >
          {menuCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={cn(
                "shrink-0 rounded-xl px-4 py-2 font-body text-sm font-semibold whitespace-nowrap transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                activeId === category.id
                  ? "bg-brand-primary text-brand-dark"
                  : "bg-brand-supporting text-brand-dark/80 hover:bg-brand-primary/50",
              )}
            >
              {category.name}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}
