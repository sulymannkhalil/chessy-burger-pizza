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
    {
      url: `${base}/menu`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
