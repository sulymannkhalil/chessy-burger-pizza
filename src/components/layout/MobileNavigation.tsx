"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { contact } from "@/config/restaurant";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NavigationLink } from "@/components/ui/NavigationLink";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    panel.inert = !open;
  }, [open]);

  return (
    <div
      id="mobile-navigation"
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        className={cn(
          "absolute inset-0 bg-brand-dark/55 transition-opacity duration-300 motion-reduce:transition-none",
          open ? "opacity-100" : "opacity-0",
        )}
        aria-label="Close menu backdrop"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "absolute inset-y-0 right-0 flex h-full w-full flex-col bg-brand-supporting p-6 shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-10 flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-brand-dark transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
          {mainNav.map((item) => (
            <NavigationLink
              key={item.href}
              href={item.href}
              label={item.label}
              tone="onLight"
              className="min-h-11 w-full max-w-xs px-4 py-2 text-2xl no-underline"
              onNavigate={onClose}
            />
          ))}
        </nav>

        <div className="pt-8">
          <Button
            href={contact.whatsappHref}
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white hover:bg-[#1ebe57] focus-visible:ring-[#25D366]"
            onClick={onClose}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
