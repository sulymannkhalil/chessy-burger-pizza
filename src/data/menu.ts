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
    id: "burgers",
    name: "Burgers",
    description: "Stacked, melted, and built for big bites.",
    items: [
      item(
        "burger-1",
        "Cheezy Smash King",
        "Double smash patty, molten cheddar, pickles, and house sauce on a soft bun.",
        "Rs. 890",
        {
          popular: true,
          featured: true,
          image: {
            src: mediaPaths.gourmetBurgerBoard,
            alt: "Cheezy Smash King burger with fries",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
      item(
        "burger-2",
        "Firecracker Beefy",
        "Spicy beef patty, jalapeños, crispy onions, and smoky chili mayo.",
        "Rs. 820",
        {
          popular: true,
          image: {
            src: mediaPaths.sharingFeast,
            alt: "Firecracker Beefy burger feast",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
      item(
        "burger-3",
        "Classic Stacker",
        "Single beef patty, lettuce, tomato, cheese, and creamy burger sauce.",
        "Rs. 690",
        {
          image: {
            src: mediaPaths.heroFoodCutout,
            alt: "Classic Stacker burger combo",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    description: "Oven-hot pies with stretchy cheese and bold toppings.",
    items: [
      item(
        "pizza-1",
        "Margy Melt Pie",
        "Tomato base, bubbly mozzarella, fresh basil, and a golden crust.",
        "Rs. 1,450",
        {
          popular: true,
          image: {
            src: mediaPaths.pizza,
            alt: "Margy Melt Pie pizza",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
      item(
        "pizza-2",
        "Crown Ring Special",
        "Stuffed ring crust packed with cheese, olives, peppers, and savory meat.",
        "Rs. 1,890",
        {
          popular: true,
          image: {
            src: mediaPaths.crownPizza,
            alt: "Crown Ring Special pizza",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
      item(
        "pizza-3",
        "Pepperoni Party",
        "Loaded pepperoni, extra cheese, and a crispy edge for sharing.",
        "Rs. 1,650",
        {
          image: {
            src: mediaPaths.pizzaBurgerNight,
            alt: "Pepperoni Party pizza night spread",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
    ],
  },
  {
    id: "bbq",
    name: "BBQ & Chicken",
    description: "Crispy, juicy, and made for late-night cravings.",
    items: [
      item(
        "bbq-1",
        "Golden Crunch Wings",
        "Crispy fried chicken pieces with a seasoned golden crust.",
        "Rs. 980",
        {
          image: {
            src: mediaPaths.friedChicken,
            alt: "Golden Crunch Wings",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
      item(
        "bbq-2",
        "Smoky BBQ Platter",
        "Charred BBQ bites with tangy glaze and a side of fries.",
        "Rs. 1,250",
      ),
    ],
  },
  {
    id: "wraps",
    name: "Wraps",
    description: "Grilled wraps stuffed tight and ready to go.",
    items: [
      item(
        "wrap-1",
        "Grillz Chicken Wrap",
        "Grilled chicken, fresh greens, peppers, and creamy wrap sauce.",
        "Rs. 720",
        {
          image: {
            src: mediaPaths.wrap,
            alt: "Grillz Chicken Wrap",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
      item(
        "wrap-2",
        "Zesty Veggie Roll",
        "Crunchy veggies, cheese, and herb mayo in a toasted tortilla.",
        "Rs. 620",
      ),
    ],
  },
  {
    id: "sides",
    name: "Sides",
    description: "The extra hits that complete every order.",
    items: [
      item(
        "side-1",
        "Lava Cheez Fries",
        "Crispy fries drowned in molten cheese sauce and olives.",
        "Rs. 550",
        {
          popular: true,
          image: {
            src: mediaPaths.cheesyFries,
            alt: "Lava Cheez Fries",
            label: "ATTACH THE IMAGE",
            aspectRatio: "1/1",
          },
        },
      ),
      item(
        "side-2",
        "Crispy Onion Rings",
        "Golden battered rings with dipping sauce on the side.",
        "Rs. 420",
      ),
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Cold pours to cool down the heat.",
    items: [
      item(
        "drink-1",
        "Berry Chill Slush",
        "Icy berry swirl — sweet, cold, and refreshing.",
        "Rs. 320",
      ),
      item(
        "drink-2",
        "Classic Soft Drink",
        "Chilled soft drink of your choice.",
        "Rs. 180",
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
