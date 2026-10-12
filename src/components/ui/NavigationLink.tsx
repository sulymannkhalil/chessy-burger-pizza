"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  isNavItemActive,
  queueSectionNavigation,
} from "@/hooks/useActiveSection";
import { useActiveSectionContext } from "@/components/layout/ActiveSectionProvider";
import { scrollToSection } from "@/lib/smooth-scroll";

type NavigationLinkProps = {
  href: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
  /** Desktop navbar sits on dark hero; mobile drawer uses light panel */
  tone?: "onDark" | "onLight";
};

export function NavigationLink({
  href,
  label,
  className,
  onNavigate,
  tone = "onDark",
}: NavigationLinkProps) {
  const { pathname, activeSection } = useActiveSectionContext();
  const isActive = isNavItemActive(href, pathname, activeSection);

  return (
    <Link
      href={href}
      scroll={href === "/menu" ? true : undefined}
      onClick={(event) => {
        onNavigate?.();

        if (href === "/" && pathname === "/") {
          event.preventDefault();
          scrollToSection("hero");
          window.history.pushState(null, "", "/");
          return;
        }

        if (href.startsWith("/#")) {
          const sectionId = href.slice(2);
          if (pathname === "/") {
            event.preventDefault();
            scrollToSection(sectionId);
            window.history.pushState(null, "", href);
            return;
          }

          // Cross-route: stash target so homepage scroll-spy can land correctly.
          queueSectionNavigation(sectionId);
        }
      }}
      className={cn(
        "font-body text-sm font-bold tracking-wide no-underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
        tone === "onDark" &&
          "[text-shadow:0_2px_8px_rgba(0,0,0,0.7)] hover:text-brand-primary",
        tone === "onDark" && (isActive ? "text-brand-primary" : "text-white"),
        tone === "onLight" && "hover:text-brand-secondary",
        tone === "onLight" &&
          (isActive ? "text-brand-secondary" : "text-brand-dark"),
        className,
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
