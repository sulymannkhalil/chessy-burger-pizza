import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-accent text-lg text-brand-secondary sm:text-xl">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
        {heading}
      </h2>
      {body ? (
        <p className="mt-4 font-body text-base leading-relaxed text-brand-dark/75 sm:text-lg">
          {body}
        </p>
      ) : null}
      {children}
    </div>
  );
}
