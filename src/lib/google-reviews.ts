import { googlePlace } from "@/config/google-place";
import { sampleReviews, sampleReviewsSummary } from "@/data/reviews";
import type { GoogleReviewsData } from "@/types";

/**
 * Always return the curated six reviews from `src/data/reviews.ts`.
 * Live Places API responses must not overwrite this showcase set.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  return {
    overallRating: sampleReviewsSummary.overallRating,
    reviewCount: sampleReviewsSummary.reviewCount,
    reviewsUrl: googlePlace.reviewsUrl,
    isLive: false,
    emptyStateMessage: "",
    reviews: sampleReviews,
  };
}
