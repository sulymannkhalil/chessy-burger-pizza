"use client";

import Image from "next/image";
import { createElement, useState } from "react";
import type { AspectRatio } from "@/types";
import { cn } from "@/lib/cn";
import { getAspectClass } from "@/lib/media";
import { getFoodCategoryIcon } from "@/lib/food-icon";

type FoodImagePlaceholderProps = {
  categoryId?: string;
  itemName?: string;
  src?: string;
  alt?: string;
  aspectRatio?: AspectRatio;
  className?: string;
  priority?: boolean;
  rounded?: "none" | "lg" | "xl" | "2xl" | "full";
  /** When true, always show the category icon (menu / popular cards). */
  forceIcon?: boolean;
};

const radiusMap = {
  none: "rounded-none",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
} as const;

function IconFallback({
  categoryId,
  itemName,
  label,
}: {
  categoryId?: string;
  itemName?: string;
  label: string;
}) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-brand-supporting"
      role="img"
      aria-label={label}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,201,40,0.22),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(216,59,50,0.12),transparent_50%)]"
        aria-hidden
      />
      <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white/80 ring-1 ring-brand-dark/10 sm:h-20 sm:w-20">
        {createElement(getFoodCategoryIcon(categoryId, itemName), {
          className: "h-9 w-9 text-brand-dark sm:h-10 sm:w-10",
          strokeWidth: 1.6,
          "aria-hidden": true,
        })}
      </div>
    </div>
  );
}

export function FoodImagePlaceholder({
  categoryId,
  itemName,
  src,
  alt,
  aspectRatio = "1/1",
  className,
  priority = false,
  rounded = "2xl",
  forceIcon = true,
}: FoodImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);
  const showImage = !forceIcon && Boolean(src) && !failed;
  const label = itemName ? `${itemName} image placeholder` : "Food image placeholder";

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-brand-dark/10",
        radiusMap[rounded],
        getAspectClass(aspectRatio),
        className,
      )}
    >
      {showImage ? (
        <Image
          src={src!}
          alt={alt ?? itemName ?? "Menu item"}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setFailed(true)}
        />
      ) : (
        <IconFallback
          categoryId={categoryId}
          itemName={itemName}
          label={label}
        />
      )}
    </div>
  );
}
