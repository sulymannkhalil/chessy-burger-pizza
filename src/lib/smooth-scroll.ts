import type Lenis from "lenis";

/** Approximate fixed navbar offset for section scroll targets */
export const NAV_SCROLL_OFFSET = -96;

type ScrollListener = () => void;

let lenisInstance: Lenis | null = null;
const scrollListeners = new Set<ScrollListener>();

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenisInstance() {
  return lenisInstance;
}

export function notifyScrollListeners() {
  scrollListeners.forEach((listener) => listener());
}

export function subscribeToScroll(listener: ScrollListener) {
  scrollListeners.add(listener);
  return () => {
    scrollListeners.delete(listener);
  };
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToSection(
  sectionId: string,
  options?: { immediate?: boolean; offset?: number },
) {
  if (typeof document === "undefined") return;

  const target = document.getElementById(sectionId);
  if (!target) return;

  const immediate = options?.immediate ?? prefersReducedMotion();
  const offset = options?.offset ?? NAV_SCROLL_OFFSET;
  const lenis = lenisInstance;

  if (lenis && !immediate) {
    lenis.scrollTo(target, {
      offset,
      duration: 1.1,
    });
    return;
  }

  const top =
    target.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: immediate ? "auto" : "smooth",
  });
}
