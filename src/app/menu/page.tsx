import type { Metadata } from "next";
import { MenuCategories } from "@/components/sections/menu/MenuCategories";
import { MenuContactCTA } from "@/components/sections/menu/MenuContactCTA";
import { MenuHero } from "@/components/sections/menu/MenuHero";
import { MenuListing } from "@/components/sections/menu/MenuListing";

export const metadata: Metadata = {
  title: "Full Menu",
  description:
    "Browse the complete Chessy Pizza and Burger menu structure. Item details will be updated with verified client content.",
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <MenuCategories />
      <MenuListing />
      <MenuContactCTA />
    </>
  );
}
