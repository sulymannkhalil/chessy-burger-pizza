import type { MediaAsset } from "@/types";
import { mediaPaths } from "@/data/media";

export const heroContent = {
  backgroundWord: "CHESSY",
  headline: "Pizza. Burgers. Bold bites.",
  supporting:
    "A fast-food destination with confident flavor, generous plates, and a modern neighborhood energy.",
  exploreCta: "Explore Menu",
  visitCta: "Visit Us",
  supportingInfo: "Open weekdays · 12 PM – 2 AM · Lahore",
  backgroundImage: {
    src: mediaPaths.gourmetBurgerBoard,
    alt: "Cheezy Smash King burger with fries and drink",
    label: "ATTACH THE IMAGE – HERO BACKGROUND",
    aspectRatio: "16/9",
  } satisfies MediaAsset,
};

export const aboutContent = {
  heading: "About Chessy",
  blocks: [
    {
      title: "Our kitchen",
      body: "Chessy is built for late-night hunger and weekend energy — bold pizza, stacked burgers, and sides that never play small.",
    },
    {
      title: "How we cook",
      body: "We keep things hot and simple: fresh prep, generous toppings, and plates that look as good as they taste.",
    },
    {
      title: "What we value",
      body: "Big flavor, friendly service, and a spot where friends can drop in, dig in, and come back for more.",
    },
  ],
  media: {
    src: mediaPaths.crownPizza,
    alt: "Signature ring pizza fresh from the kitchen",
    label: "ATTACH THE IMAGE – ABOUT RESTAURANT",
    aspectRatio: "3/4",
  } satisfies MediaAsset,
};

export const sectionCopy = {
  popular: {
    eyebrow: "Guest favorites",
    heading: "Popular items",
    body: "A quick look at the plates people keep coming back for.",
  },
  menuPreview: {
    eyebrow: "The menu",
    heading: "Built for every craving",
    body: "Browse the categories, then open the full menu for every burger, pie, wrap, and side.",
  },
  gallery: {
    eyebrow: "The look",
    heading: "Food & restaurant gallery",
    body: "A taste of the kitchen — pizza, burgers, wraps, and late-night sides.",
  },
  reviews: {
    eyebrow: "Guest trust",
    heading: "Google Reviews",
    body: "Authentic feedback from our Google Business listing — updated from Google Maps.",
  },
  contact: {
    eyebrow: "Find us",
    heading: "Location & contact",
    body: "Swing by during weekday hours, message us on WhatsApp, or get directions on the map.",
  },
  menuHero: {
    heading: "Full menu",
    body: "Burgers, pizza, BBQ, wraps, sides, and drinks — pick your craving and dig in.",
  },
  menuCta: {
    heading: "Ready to visit?",
    body: "We’re open weekdays from 12 PM to 2 AM. Find us on the map or ping WhatsApp before you roll through.",
  },
} as const;
