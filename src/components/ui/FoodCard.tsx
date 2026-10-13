"use client";

import type { AspectRatio, MenuItem } from "@/types";
import { getMenuItemCategoryId } from "@/data/menu";
import { cn } from "@/lib/cn";
import { FoodImagePlaceholder } from "@/components/ui/FoodImagePlaceholder";

type FoodCardProps = {
  item: MenuItem;
  categoryId?: string;
  className?: string;
  compact?: boolean;
  /** When false, show the item image if available (popular / featured). */
  forceIcon?: boolean;
  disableHover?: boolean;
  aspectRatio?: AspectRatio;
};

export function FoodCard({
  item,
  categoryId,
  className,
  compact = false,
  forceIcon = true,
  disableHover = false,
  aspectRatio = "16/9",
}: FoodCardProps) {
  const resolvedCategoryId = categoryId ?? getMenuItemCategoryId(item.id);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-white/70 ring-1 ring-brand-dark/8",
        !disableHover &&
          "transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(36,32,30,0.45)]",
        className,
      )}
    >
      <FoodImagePlaceholder
        categoryId={resolvedCategoryId}
        itemName={item.name}
        src={item.image?.src}
        alt={item.image?.alt ?? item.name}
        aspectRatio={aspectRatio}
        rounded="none"
        forceIcon={forceIcon}
        className="w-full shrink-0"
      />
      <div
        className={cn(
          "flex min-h-[7.5rem] flex-1 flex-col gap-2 p-4 sm:min-h-[8.5rem]",
          !compact && "sm:p-5",
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 font-display text-xl uppercase leading-tight text-brand-dark sm:text-2xl">
            {item.name}
          </h3>
          <p className="shrink-0 font-body text-sm font-bold text-brand-secondary sm:text-base">
            {item.price}
          </p>
        </div>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-brand-dark/70">
          {item.description}
        </p>
      </div>
    </article>
  );
}
