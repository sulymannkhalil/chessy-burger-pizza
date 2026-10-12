import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-brand-dark hover:bg-[#ffd45a] focus-visible:ring-brand-dark",
  secondary:
    "bg-brand-secondary text-white hover:bg-[#c4332b] focus-visible:ring-brand-secondary",
  ghost:
    "bg-transparent text-brand-dark hover:bg-brand-supporting/70 focus-visible:ring-brand-dark",
  outline:
    "border-2 border-brand-dark bg-transparent text-brand-dark hover:bg-brand-dark hover:text-white focus-visible:ring-brand-dark",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3 text-base sm:text-lg",
};

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "children" | "className"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-body font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
