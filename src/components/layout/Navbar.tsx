"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { contact } from "@/config/restaurant";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NavigationLink } from "@/components/ui/NavigationLink";
import { ActiveSectionProvider } from "@/components/layout/ActiveSectionProvider";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { subscribeToScroll } from "@/lib/smooth-scroll";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hiddenDesktop, setHiddenDesktop] = useState(false);
  const [mobileOpenAtPath, setMobileOpenAtPath] = useState<string | null>(null);
  const mobileOpen = mobileOpenAtPath === pathname;
  const lastScrollY = useRef(0);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (!isDesktop) {
        setHiddenDesktop(false);
        lastScrollY.current = y;
        return;
      }

      const delta = y - lastScrollY.current;
      if (y < 64) {
        setHiddenDesktop(false);
      } else if (delta > 6) {
        setHiddenDesktop(true);
      } else if (delta < -6) {
        setHiddenDesktop(false);
      }

      lastScrollY.current = y;
    };

    update();
    const unsubscribe = subscribeToScroll(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      unsubscribe();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <ActiveSectionProvider>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
          scrolled
            ? "border-b border-white/10 bg-brand-dark/85 py-1.5 shadow-md backdrop-blur-xl sm:py-2"
            : "bg-transparent py-2 sm:py-2",
          hiddenDesktop && "lg:-translate-y-full lg:pointer-events-none",
        )}
      >
        <Container className="relative flex items-center justify-between gap-4 px-6 sm:px-8 lg:px-10">
          <div className="relative z-10 flex min-w-0 shrink-0 items-center">
            <Logo className="origin-left scale-[1.95] [&_img]:h-14 [&_img]:sm:h-16 [&_img]:lg:h-15" />
          </div>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex xl:gap-8"
            aria-label="Primary"
          >
            {mainNav.map((item) => (
              <NavigationLink
                key={item.href}
                href={item.href}
                label={item.label}
                tone="onDark"
                className="text-base whitespace-nowrap"
              />
            ))}
          </nav>

          <div className="relative z-10 flex shrink-0 items-center gap-3">
            <Button
              href={contact.whatsappHref}
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden bg-[#25D366] text-white hover:bg-[#1ebe57] focus-visible:ring-[#25D366] sm:inline-flex"
            >
              WhatsApp
            </Button>
            <button
              type="button"
              className="rounded-xl p-2 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label="Open menu"
              onClick={() => setMobileOpenAtPath(pathname)}
            >
              <Menu className="h-6 w-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]" />
            </button>
          </div>
        </Container>
      </header>
      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpenAtPath(null)}
      />
    </ActiveSectionProvider>
  );
}
