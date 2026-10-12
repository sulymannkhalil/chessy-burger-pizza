import type { MediaAsset, MenuCategory, MenuItem } from "@/types";
import { mediaPaths } from "@/data/media";

const item = (
  id: string,
  name: string,
  description: string,
  price: string,
  options?: {
    popular?: boolean;
    featured?: boolean;
    image?: MediaAsset;
  },
): MenuItem => ({
  id,
  name,
  description,
  price,
  image: options?.image ?? {
    label: "ATTACH THE IMAGE",
    aspectRatio: "1/1",
  },
  popular: options?.popular,
  featured: options?.featured,
});

export const menuCategories: MenuCategory[] = [
  {
    id: "deals",
    name: "Deals",
    description: "Value combos packed with burgers, pizza, wings, and drinks.",
    items: [
      item(
        "deal-hot",
        "Hot Deal",
        "1 Zinger Burger, 1 Regular Fries, 1 N.R Bottle.",
        "Rs. 599",
        {
          popular: true,
          image: {
            src: mediaPaths.gourmetBurgerBoard,
            alt: "Hot Deal combo",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
      item(
        "deal-special",
        "Special Deal",
        "2 Zinger Burger, 1 Regular Fries, 1 Half Litre.",
        "Rs. 899",
      ),
      item(
        "deal-best",
        "Best Deal",
        "1 Small Pizza, 1 Zinger Burger, 1 N.R Bottle.",
        "Rs. 999",
        { popular: true },
      ),
      item(
        "deal-food-1",
        "Food Deal 1",
        "1 Small Pizza, 2 Zinger Burger, 5 Hot Wings, 1 Half Litre.",
        "Rs. 1,650",
      ),
      item(
        "deal-food-2",
        "Food Deal 2",
        "1 Medium Pizza, 5 Hot Wings, 5 Nuggets, 1 Litre Cold Drink.",
        "Rs. 1,850",
      ),
      item(
        "deal-food-3",
        "Food Deal 3",
        "1 Large Pizza, 10 Hot Wings, 1 Litre Cold Drink.",
        "Rs. 2,150",
      ),
      item(
        "deal-jumbo-1",
        "Jumbo Deal 1",
        "5 Zinger Burger, 1.5 Litre Cold Drink.",
        "Rs. 1,950",
      ),
      item(
        "deal-jumbo-2",
        "Jumbo Deal 2",
        "1 Large Pizza, 3 Zinger Burger, 1 Regular Fries, 1.5 Litre Cold Drink.",
        "Rs. 2,999",
      ),
      item(
        "deal-jumbo-3",
        "Jumbo Deal 3",
        "1 Large Pizza, 10 Hot Wings, 10 Nuggets, 1 Regular Fries, 1.5 Litre Cold Drink.",
        "Rs. 2,999",
      ),
      item(
        "deal-student",
        "Student Deal",
        "1 Zinger Burger, 5 Hot Wings, 5 Nuggets, 1 Half Litre.",
        "Rs. 1,050",
      ),
      item(
        "deal-chicken-feast",
        "Chicken Feast",
        "3 Chicken Pieces, 1 N.R Bottle.",
        "Rs. 999",
        {
          image: {
            src: mediaPaths.friedChicken,
            alt: "Chicken Feast",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
      item(
        "deal-birthday",
        "Birthday Deal",
        "2 Large Pizza, 20 Hot Wings, 3 Zinger Burger, 2 Patty Burger, 1 Family Fries, 2 Cold Drink 1.5 Litre, Pound Cake.",
        "Rs. 6,500",
      ),
      item(
        "deal-food-blast-1",
        "Food Blast 1",
        "3 Small Pizza, 1 Litre Cold Drink.",
        "Rs. 1,750",
      ),
      item(
        "deal-food-blast-2",
        "Food Blast 2",
        "3 Medium Pizza, 1.5 Litre Cold Drink.",
        "Rs. 3,350",
      ),
      item(
        "deal-food-blast-3",
        "Food Blast 3",
        "3 Large Pizza, 1.5 Litre Cold Drink.",
        "Rs. 4,250",
      ),
      item(
        "deal-special-platter",
        "Special Platter",
        "Spring Roll, Grill Wings, Fries.",
        "Rs. 899",
      ),
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    description: "Crispy, cheesy, and stacked for big bites.",
    items: [
      item("burger-zinger", "Zinger Burger", "Crispy zinger fillet burger.", "Rs. 390", {
        popular: true,
        image: {
          src: mediaPaths.gourmetBurgerBoard,
          alt: "Zinger Burger",
          label: "ATTACH THE IMAGE",
          aspectRatio: "1/1",
        },
      }),
      item("burger-tower", "Tower Burger", "Tall stacked tower burger.", "Rs. 699"),
      item("burger-mighty", "Mighty Burger", "Mighty-sized loaded burger.", "Rs. 700"),
      item("burger-patty", "Patty Burger", "Classic patty burger.", "Rs. 299"),
      item("burger-kabab", "Kabab Burger", "Kabab-filled burger.", "Rs. 299"),
      item("burger-pizza", "Pizza Burger", "Pizza-style burger.", "Rs. 499"),
      item(
        "burger-cheesy-special",
        "Cheesy Special Burger",
        "Signature cheesy special burger.",
        "Rs. 750",
        {
          popular: true,
          featured: true,
          image: {
            src: mediaPaths.sharingFeast,
            alt: "Cheesy Special Burger",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
      item("burger-chatpata", "Chatpata Burger", "Spicy chatpata burger.", "Rs. 499"),
      item("burger-fillet", "Fillet Burger", "Crispy fillet burger.", "Rs. 550"),
      item(
        "burger-doner",
        "Doner Burger",
        "Doner-style burger special.",
        "Rs. 499",
        { popular: true },
      ),
    ],
  },
  {
    id: "paratha-roll",
    name: "Paratha Roll",
    description: "Soft paratha rolls filled and rolled fresh.",
    items: [
      item("paratha-chicken", "Chicken Paratha", "Classic chicken paratha roll.", "Rs. 350"),
      item("paratha-zinger", "Zinger Paratha", "Crispy zinger paratha roll.", "Rs. 440"),
      item("paratha-kabab", "Kabab Paratha", "Kabab paratha roll.", "Rs. 350"),
      item(
        "paratha-malai-boti",
        "Malai Boti Paratha",
        "Malai boti paratha roll.",
        "Rs. 350",
      ),
      item("paratha-pizza", "Pizza Paratha", "Pizza-style paratha roll.", "Rs. 650"),
      item(
        "paratha-cheesy-special",
        "Cheesy Special Paratha",
        "Cheesy special paratha roll.",
        "Rs. 450",
      ),
    ],
  },
  {
    id: "fries",
    name: "Fries",
    description: "Crispy fries, loaded and ready to share.",
    items: [
      item("fries-garlic-reg", "Garlic Fries Regular", "Regular garlic fries.", "Rs. 300"),
      item("fries-large", "Large Fries", "Large portion of fries.", "Rs. 400"),
      item("fries-family", "Family Fries", "Family-size fries.", "Rs. 500"),
      item(
        "fries-pizza-large",
        "Pizza Fries Large",
        "Large pizza-style fries.",
        "Rs. 800",
        {
          popular: true,
          image: {
            src: mediaPaths.cheesyFries,
            alt: "Pizza Fries Large",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
      item("fries-loaded-large", "Loaded Fries Large", "Large loaded fries.", "Rs. 650"),
      item(
        "fries-loaded-family",
        "Loaded Fries Family",
        "Family-size loaded fries.",
        "Rs. 750",
      ),
    ],
  },
  {
    id: "sandwich",
    name: "Sandwich",
    description: "Toasted sandwiches stacked with flavor.",
    items: [
      item("sandwich-chicken", "Chicken Sandwich", "Classic chicken sandwich.", "Rs. 500"),
      item("sandwich-club", "Club Sandwich", "Multi-layer club sandwich.", "Rs. 499"),
      item(
        "sandwich-cheesy-special",
        "Cheesy Special Sandwich",
        "Cheesy special sandwich.",
        "Rs. 499",
      ),
      item("sandwich-mexican", "Mexican Sandwich", "Mexican-style sandwich.", "Rs. 650"),
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    description: "Wings, nuggets, and crispy bites.",
    items: [
      item("snack-hot-wings", "Hot Wings 10Pc", "10 pieces hot wings.", "Rs. 720", {
        popular: true,
        image: {
          src: mediaPaths.friedChicken,
          alt: "Hot Wings",
          label: "ATTACH THE IMAGE",
          aspectRatio: "1/1",
        },
      }),
      item("snack-nuggets", "Nuggets 10Pc", "10 pieces chicken nuggets.", "Rs. 600"),
      item("snack-bbq-wings", "B.B.Q Wings 10Pc", "10 pieces BBQ wings.", "Rs. 720"),
    ],
  },
  {
    id: "grill",
    name: "Grill",
    description: "Flame-grilled favorites.",
    items: [
      item("grill-burger", "Grill Burger", "Flame-grilled burger.", "Rs. 699"),
      item("grill-wrap", "Grill Wrap", "Grilled wrap.", "Rs. 599", {
        image: {
          src: mediaPaths.wrap,
          alt: "Grill Wrap",
          label: "ATTACH THE IMAGE",
          aspectRatio: "1/1",
        },
      }),
      item("grill-sandwich", "Grilled Sandwich", "Grilled sandwich.", "Rs. 550"),
      item("grill-wings", "Grilled Wings", "Grilled chicken wings.", "Rs. 720"),
      item("grill-boti", "Grilled Boti", "Grilled boti.", "Rs. 499"),
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    description: "Creamy and bold pasta — Small / Large.",
    items: [
      item("pasta-macroni", "Macroni Pasta", "Small / Large.", "Rs. 500 / 700"),
      item("pasta-alfredo", "Alfredo Pasta", "Small / Large.", "Rs. 500 / 750"),
      item("pasta-lazzania", "Lazzania Pasta", "Small / Large.", "Rs. 500 / 750"),
      item("pasta-crunchy", "Crunchy Pasta", "Large.", "Rs. 800"),
      item("pasta-bbq", "B.B.Q Pasta", "Small / Large.", "Rs. 500 / 700"),
    ],
  },
  {
    id: "wrap",
    name: "Wrap",
    description: "Fresh wraps rolled and ready.",
    items: [
      item("wrap-malai-boti", "Malai Boti Wrap", "Malai boti wrap.", "Rs. 499"),
      item("wrap-special", "Special Wrap", "House special wrap.", "Rs. 550"),
      item("wrap-zinger", "Zinger Wrap", "Crispy zinger wrap.", "Rs. 499"),
    ],
  },
  {
    id: "crispy-chicken",
    name: "Crispy Chicken",
    description: "Golden crispy chicken pieces.",
    items: [
      item("crispy-1pc", "Chicken 1Pc", "1 piece crispy chicken.", "Rs. 400"),
      item("crispy-5pc", "Chicken 5Pc", "5 pieces crispy chicken.", "Rs. 1,700"),
    ],
  },
  {
    id: "shawarma",
    name: "Shawarma",
    description: "Rolled shawarma classics and specials.",
    items: [
      item("shawarma-chicken", "Chicken Shawarma", "Classic chicken shawarma.", "Rs. 280"),
      item("shawarma-zinger", "Zinger Shawarma", "Crispy zinger shawarma.", "Rs. 399"),
      item("shawarma-bbq", "B.B.Q Shawarma", "BBQ shawarma.", "Rs. 350"),
      item("shawarma-supreme", "Supreme Shawarma", "Supreme loaded shawarma.", "Rs. 450"),
      item("shawarma-platter", "Platter Shawarma", "Shawarma platter.", "Rs. 700"),
      item(
        "shawarma-cheesy-special",
        "Cheesy Special Shawarma",
        "Cheesy special shawarma.",
        "Rs. 450",
      ),
    ],
  },
];

export const popularItems: MenuItem[] = menuCategories
  .flatMap((category) => category.items)
  .filter((menuItem) => menuItem.popular)
  .slice(0, 6);

export const featuredDish: MenuItem =
  menuCategories
    .flatMap((category) => category.items)
    .find((menuItem) => menuItem.featured) ?? menuCategories[0].items[0];

/** Look up the category id for a menu item without changing item data. */
export function getMenuItemCategoryId(itemId: string): string | undefined {
  return menuCategories.find((category) =>
    category.items.some((menuItem) => menuItem.id === itemId),
  )?.id;
}
