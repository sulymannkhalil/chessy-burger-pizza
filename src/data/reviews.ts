import type { ReviewPlaceholder } from "@/types";

/**
 * Curated customer reviews for the homepage.
 * Kept as static content — not overwritten by live Places API responses.
 */
export const sampleReviews: ReviewPlaceholder[] = [
  {
    id: "sample-1",
    reviewerName: "Malik Hamza",
    reviewText:
      "Good experience about food Nd setting family haal is good for family settings food is also very tasty crust kabab pizza is so deliouse sandwich Nd mng others fast food atums are good 👍",
    reviewDate: "",
    rating: "5.0",
  },
  {
    id: "sample-2",
    reviewerName: "M Umais",
    reviewText: "Good Taste and Rates Are Affordable Nice Taste",
    reviewDate: "",
    rating: "5.0",
  },
  {
    id: "sample-3",
    reviewerName: "Ali Hamza",
    reviewText:
      "Masha Allah food bhthreen thaa crust kabab pizza so delicious pasta b achaa thaa",
    reviewDate: "",
    rating: "4.0",
  },
  {
    id: "sample-4",
    reviewerName: "Farhan Bhatti Fanii",
    reviewText:
      "Best taste in the jaranwala road plz tray the first scnd time you are other person going to cheezy pizza yahoo",
    reviewDate: "",
    rating: "5.0",
  },
  {
    id: "sample-5",
    reviewerName: "Umar Daraz",
    reviewText:
      "Food was awesome crown crust pizza so delicious. Family setting is comfortable",
    reviewDate: "",
    rating: "5.0",
  },
  {
    id: "sample-6",
    reviewerName: "Ali Hassan",
    reviewText:
      "GCrown kurst. Kabab crust pizza 🍕 and chessy sandwich 🥪 these things so tasty and yummy …",
    reviewDate: "",
    rating: "4.0",
  },
];

export const sampleReviewsSummary = {
  overallRating: "4.5",
  reviewCount: String(sampleReviews.length),
} as const;
