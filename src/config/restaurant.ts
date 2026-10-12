import type { ContactInfo, OpeningHoursEntry, SocialLink } from "@/types";
import { googlePlace } from "@/config/google-place";

/**
 * Central restaurant configuration.
 * Swap sample copy for verified client details when ready.
 */
export const restaurant = {
  name: "Chessy Pizza and Burger",
  shortName: "Chessy",
  tagline: "Bold flavors. Fresh fire. Made to share.",
  description:
    "A modern pizza and burger destination built for bold flavor, generous portions, and a welcoming neighborhood vibe.",
  locale: "en",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const contact: ContactInfo = {
  addressLines: ["Cheesy Pizza & Burger", "Sheikhupura, Pakistan"],
  phoneDisplay: "0324 5940858",
  phoneHref: "tel:+923245940858",
  whatsappHref: "https://wa.me/923245940858",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d217544.21277827883!2d73.8586633!3d31.5755287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fbcfa0bc8f91%3A0x5146b0ddc65070e6!2sCheesy%20Pizza%20%26%20Burger!5e0!3m2!1sen!2s!4v1791800286952!5m2!1sen!2s",
  mapsDirectionsUrl: googlePlace.mapsUrl,
  googleReviewsUrl: googlePlace.reviewsUrl,
};

export const openingHours: OpeningHoursEntry[] = [
  { days: "Everyday", hours: "11:00 AM – 11:30 PM" }
];

/** Only include socials that have real URLs */
export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/cheesypizzaburger/",
    available: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/cheesypizzaburger/",
    available: true,
  },
];
