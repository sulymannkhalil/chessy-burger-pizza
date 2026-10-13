import type { MetadataRoute } from "next";
import { restaurant } from "@/config/restaurant";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = restaurant.siteUrl;
  return [
    {
      url: base,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
