import type { ReviewPlaceholder } from "@/types";

/** Showcase reviews shown when live Google Places data is unavailable. */
export const sampleReviews: ReviewPlaceholder[] = [
  {
    id: "sample-1",
    reviewerName: "Ayesha Khan",
    reviewText:
      "The smash burgers are ridiculous — crispy edges, melty cheese, and a soft bun. Came with friends and we finished everything. Definitely coming back for the pizza next time.",
    reviewDate: "2 weeks ago",
    rating: "5.0",
  },
  {
    id: "sample-2",
    reviewerName: "Hassan Raza",
    reviewText:
      "Late-night craving sorted. Ordered the Cheezy Smash King and a large pizza — both hit hard. Portions are generous and the staff was quick even when it was busy.",
    reviewDate: "3 weeks ago",
    rating: "5.0",
  },
  {
    id: "sample-3",
    reviewerName: "Sana Malik",
    reviewText:
      "Tried the BBQ pizza and garlic fries. Flavors are bold without being greasy. Great spot if you want something filling that still tastes fresh.",
    reviewDate: "1 month ago",
    rating: "4.0",
  },
  {
    id: "sample-4",
    reviewerName: "Bilal Ahmed",
    reviewText:
      "Consistent quality every visit. Burgers are cooked right, cheese pulls are real, and the vibe is casual and welcoming. Highly recommend for groups.",
    reviewDate: "1 month ago",
    rating: "5.0",
  },
  {
    id: "sample-5",
    reviewerName: "Fatima Noor",
    reviewText:
      "Wrapped up a wrap combo and a side — simple, tasty, and affordable. WhatsApp ordering was easy and pickup was ready on time.",
    reviewDate: "2 months ago",
    rating: "5.0",
  },
  {
    id: "sample-6",
    reviewerName: "Omar Siddiqui",
    reviewText:
      "Best local pizza and burger combo we've found. Crust has a nice bite and the toppings are loaded. Perfect weekday dinner stop.",
    reviewDate: "2 months ago",
    rating: "4.0",
  },
];

export const sampleReviewsSummary = {
  overallRating: "4.8",
  reviewCount: String(sampleReviews.length),
} as const;
