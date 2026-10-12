import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/config/restaurant";
import { mediaPaths } from "@/data/media";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
        className,
      )}
      aria-label={`${restaurant.name} home`}
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
