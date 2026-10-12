"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { isNavItemActive } from "@/hooks/useActiveSection";
import { useActiveSectionContext } from "@/components/layout/ActiveSectionProvider";

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
      onClick={onNavigate}
      className={cn(
        "font-body text-sm font-bold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
        tone === "onDark" &&
          "[text-shadow:0_2px_8px_rgba(0,0,0,0.7)] hover:text-brand-primary",
        tone === "onDark" && (isActive ? "text-brand-primary" : "text-white"),
        tone === "onLight" &&
          "[text-shadow:0_1px_2px_rgba(36,32,30,0.2)] hover:text-brand-dark",
        tone === "onLight" && (isActive ? "text-brand-dark underline underline-offset-4" : "text-brand-dark"),
        className,
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
