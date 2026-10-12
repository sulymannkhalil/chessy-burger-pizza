"use client";

import { useEffect, useRef, useState } from "react";
import { menuCategories } from "@/data/menu";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import {
  getLenisInstance,
  scrollToSection,
  subscribeToScroll,
} from "@/lib/smooth-scroll";

/** Navbar + sticky category bar clearance for section jumps / scroll-spy. */
const MENU_SECTION_OFFSET = -172;
const SPY_OFFSET_PX = 180;
const SCROLL_SPY_LOCK_MS = 1400;
const TOP_SCROLL_THRESHOLD = 48;

let scrollSpyLockUntil = 0;

function markScrollSpyLocked() {
  scrollSpyLockUntil = performance.now() + SCROLL_SPY_LOCK_MS;
}

function isScrollSpyLocked() {
  return performance.now() < scrollSpyLockUntil;
}

function firstCategoryId() {
  return menuCategories[0]?.id ?? "";
}

function readActiveCategoryId(): string {
  const ids = menuCategories.map((category) => category.id);
  const fallback = ids[0] ?? "";

  if (window.scrollY <= TOP_SCROLL_THRESHOLD) {
    return fallback;
  }

  const probeY = window.scrollY + SPY_OFFSET_PX;
  let current = fallback;

  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el || el.offsetHeight === 0) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (top <= probeY) current = id;
  }

  return current;
}

function scrollMenuToTop() {
  const lenis = getLenisInstance();
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
    return;
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

export function MenuCategories() {
  const [activeId, setActiveId] = useState(firstCategoryId);
  const [hidden, setHidden] = useState(false);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const readyRef = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    const hasValidHash = Boolean(hash && document.getElementById(hash));

    if (!hasValidHash) {
      scrollMenuToTop();
      if (window.location.hash) {
        window.history.replaceState(null, "", "/menu");
      }
    } else {
      markScrollSpyLocked();
      window.requestAnimationFrame(() => {
        setActiveId(hash);
      });
    }

    const armSpy = window.setTimeout(() => {
      readyRef.current = true;
      if (!isScrollSpyLocked()) {
        setActiveId(readActiveCategoryId());
      }
    }, 200);

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (y < 64) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }

      lastScrollY.current = y;

      if (!readyRef.current || isScrollSpyLocked()) return;
      const next = readActiveCategoryId();
      if (next) setActiveId(next);
    };

    lastScrollY.current = window.scrollY;
    const unsubscribe = subscribeToScroll(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    let hashTimer: number | undefined;
    if (hasValidHash) {
      hashTimer = window.setTimeout(() => {
        scrollToSection(hash, { offset: MENU_SECTION_OFFSET });
      }, 160);
    }

    const onPopState = () => {
      const nextHash = window.location.hash.replace(/^#/, "");
      if (nextHash && document.getElementById(nextHash)) {
        markScrollSpyLocked();
        setActiveId(nextHash);
        scrollToSection(nextHash, { offset: MENU_SECTION_OFFSET });
        return;
      }
      scrollMenuToTop();
      setActiveId(firstCategoryId());
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.clearTimeout(armSpy);
      if (hashTimer) window.clearTimeout(hashTimer);
      unsubscribe();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  useEffect(() => {
    const tab = tabRefs.current[activeId];
    if (!tab) return;

    tab.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId]);

  const goToCategory = (categoryId: string) => {
    markScrollSpyLocked();
    setHidden(false);
    setActiveId(categoryId);
    scrollToSection(categoryId, { offset: MENU_SECTION_OFFSET });
    window.history.pushState(null, "", `#${categoryId}`);
  };

  return (
    <div
      className={cn(
        "sticky top-[4.75rem] z-40 border-y border-brand-dark/10 bg-white/90 backdrop-blur-xl transition-transform duration-300 ease-out sm:top-[5.25rem]",
        hidden && "-translate-y-[calc(100%+5.25rem)] pointer-events-none",
      )}
    >
      <Container className="py-3">
        <nav
          aria-label="Menu categories"
          className="overflow-x-auto px-1 pb-1 scroll-smooth [scrollbar-width:thin]"
        >
          <div className="mx-auto flex w-max min-w-full justify-center gap-2.5">
            {menuCategories.map((category) => {
              const isActive = activeId === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  ref={(node) => {
                    tabRefs.current[category.id] = node;
                  }}
                  onClick={() => goToCategory(category.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "shrink-0 cursor-pointer rounded-xl px-4 py-2.5 font-body text-sm font-semibold whitespace-nowrap transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                    isActive
                      ? "bg-brand-primary text-brand-dark"
                      : "bg-brand-supporting text-brand-dark/80 hover:bg-brand-primary/50",
                  )}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </nav>
      </Container>
    </div>
  );
}
