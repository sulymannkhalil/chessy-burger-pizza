import type { LucideIcon } from "lucide-react";
import {
  ChefHat,
  CupSoda,
  Drumstick,
  Flame,
  Hamburger,
  Pizza,
  Sandwich,
  Soup,
  UtensilsCrossed,
} from "lucide-react";

const categoryIconMap: Record<string, LucideIcon> = {
  deals: UtensilsCrossed,
  burgers: Hamburger,
  pizza: Pizza,
  "paratha-roll": Sandwich,
  fries: UtensilsCrossed,
  sides: UtensilsCrossed,
  sandwich: Sandwich,
  snacks: Drumstick,
  grill: Flame,
  pasta: Soup,
  wrap: Sandwich,
  wraps: Sandwich,
  "crispy-chicken": Drumstick,
  bbq: Drumstick,
  shawarma: Sandwich,
  drinks: CupSoda,
};

function inferIconFromName(name: string): LucideIcon | null {
  const value = name.toLowerCase();

  if (value.includes("pizza")) return Pizza;
  if (value.includes("burger") || value.includes("doner")) return Hamburger;
  if (value.includes("fries") || value.includes("side")) return UtensilsCrossed;
  if (value.includes("drink") || value.includes("soda") || value.includes("shake")) {
    return CupSoda;
  }
  if (
    value.includes("wing") ||
    value.includes("nugget") ||
    value.includes("chicken") ||
    value.includes("drum")
  ) {
    return Drumstick;
  }
  if (value.includes("pasta") || value.includes("alfredo") || value.includes("macroni")) {
    return Soup;
  }
  if (
    value.includes("wrap") ||
    value.includes("shawarma") ||
    value.includes("sandwich") ||
    value.includes("paratha") ||
    value.includes("roll")
  ) {
    return Sandwich;
  }
  if (value.includes("grill") || value.includes("bbq") || value.includes("b.b.q")) {
    return Flame;
  }

  return null;
}

/** Resolve a Lucide food icon from menu category and/or item name. */
export function getFoodCategoryIcon(
  categoryId?: string,
  itemName?: string,
): LucideIcon {
  if (categoryId && categoryIconMap[categoryId]) {
    return categoryIconMap[categoryId];
  }

  if (itemName) {
    const inferred = inferIconFromName(itemName);
    if (inferred) return inferred;
  }

  return ChefHat;
}
