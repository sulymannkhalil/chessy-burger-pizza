import type { MediaAsset } from "@/types";
import { mediaPaths } from "@/data/media";

export const heroContent = {
  headline: "Pizza. Burgers. Bold bites.",

  supporting:
    "A fast-food destination with confident flavor, generous plates, and a modern neighborhood energy.",
  exploreCta: "WhatsApp",
  visitCta: "Visit Us",
  supportingInfo: "Fattuwala, Sharqpur Road, 39350, Pakistan",
  backgroundImage: {
    src: mediaPaths.heroBackground,
    alt: "Chessy Pizza and Burger hero",
    label: "ATTACH THE IMAGE – HERO BACKGROUND",
    aspectRatio: "16/9",
  } satisfies MediaAsset,
};

export const aboutContent = {
  heading: "About Chessy",
  blocks: [
    {
      title: "Our kitchen",
      body: "Chessy is built for late-night hunger and weekend energy — bold pizza, stacked burgers, and sides that never play small. From weekday cravings to hangouts with friends, our kitchen keeps the heat on and the portions honest. Every plate is made to feel generous, craveable, and ready when you are.",
    },
    {
      title: "How we cook",
      body: "We keep things hot and simple: fresh prep, generous toppings, and plates that look as good as they taste. Dough, patties, sauces, and sides are handled with care so the flavor stays bold from first bite to last. No fuss, no shortcuts — just food that lands fast and hits hard.",
    },
    {
      title: "What we value",
      body: "Big flavor, friendly service, and a spot where friends can drop in, dig in, and come back for more. We want every visit to feel easy and welcoming, whether you’re grabbing a quick bite or settling in for a full table of favorites. Good food, good vibes, and guests who leave full and happy — that’s Chessy.",
    },
  ],
  media: {
    src: mediaPaths.aboutImage,
    alt: "Chessy Pizza and Burger food",
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
    heading: "What guests say",
    body: "Bold flavors, generous portions, and late-night cravings — here’s what people love about Chessy.",
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
    body: "We’re open Everyday from 11:00 AM to 11:30 PM. Find us on the map or ping WhatsApp before you roll through.",
  },
} as const;
