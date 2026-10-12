"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NavigationLink } from "@/components/ui/NavigationLink";
import { ActiveSectionProvider } from "@/components/layout/ActiveSectionProvider";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ActiveSectionProvider>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-brand-dark/85 py-2 shadow-md backdrop-blur-xl sm:py-2.5"
            : "bg-transparent py-2.5 sm:py-3",
        )}
      >
        <Container className="relative flex items-center justify-between gap-4 px-6 sm:px-8 lg:px-10">
          <div className="relative z-10 flex min-w-0 shrink-0 items-center">
            <Logo className="[&_img]:h-12 [&_img]:sm:h-14 [&_img]:lg:h-16" />
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
            <Button href="/menu" size="sm" className="hidden sm:inline-flex">
              Explore Menu
            </Button>
            <button
              type="button"
              className="rounded-xl p-2 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]" />
            </button>
          </div>
        </Container>
      </header>
      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </ActiveSectionProvider>
  );
}
