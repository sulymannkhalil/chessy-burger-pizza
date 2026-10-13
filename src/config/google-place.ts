/**
 * Google Business / Maps listing for Cheesy Pizza & Burger.
 * Live reviews require GOOGLE_PLACES_API_KEY in `.env.local`.
 * Optional: set GOOGLE_PLACE_ID once resolved to skip text search.
 */
export const googlePlace = {
  name: "Cheesy Pizza & Burger",
  mapsUrl:
    "https://www.google.com/maps/place/Cheesy+Pizza+%26+Burger/@31.4380652,74.034431,17z/data=!3m1!4b1!4m6!3m5!1s0x3918fbcfa0bc8f91:0x5146b0ddc65070e6!8m2!3d31.4380652!4d74.034431!16s%2Fg%2F11vb7l4z9q?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D",
  reviewsUrl:
    "https://www.google.com/maps/place/Cheesy+Pizza+%26+Burger/@31.4380652,74.034431,17z/data=!3m1!4b1!4m6!3m5!1s0x3918fbcfa0bc8f91:0x5146b0ddc65070e6!8m2!3d31.4380652!4d74.034431!16s%2Fg%2F11vb7l4z9q?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D",
  latitude: 31.4380652,
  longitude: 74.034431,
  searchQuery: "Cheesy Pizza & Burger",
} as const;
