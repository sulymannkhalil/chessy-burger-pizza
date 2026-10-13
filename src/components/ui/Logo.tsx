"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { restaurant } from "@/config/restaurant";
import { mediaPaths } from "@/data/media";
import { cn } from "@/lib/cn";
import { getLenisInstance } from "@/lib/smooth-scroll";

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function Logo({ className, inverted = false }: LogoProps) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
        className,
      )}
      aria-label={`${restaurant.name} home`}
      onClick={(event) => {
        if (pathname !== "/") return;

        event.preventDefault();
        const lenis = getLenisInstance();
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.1 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        window.history.pushState(null, "", "/");
      }}
    >
      <Image
        src={mediaPaths.logo}
        alt={`${restaurant.name} logo`}
        width={320}
        height={128}
        priority
        className={cn(
          "h-16 w-auto object-contain sm:h-20 lg:h-24",
          inverted && "brightness-110",
        )}
      />
    </Link>
  );
}
