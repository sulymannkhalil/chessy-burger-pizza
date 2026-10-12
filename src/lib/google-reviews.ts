import { googlePlace } from "@/config/google-place";
import { sampleReviews, sampleReviewsSummary } from "@/data/reviews";
import type { GoogleReviewsData, ReviewPlaceholder } from "@/types";

function sampleReviewsFallback(
  reviewsUrl: string,
  emptyStateMessage = "",
): GoogleReviewsData {
  return {
    overallRating: sampleReviewsSummary.overallRating,
    reviewCount: sampleReviewsSummary.reviewCount,
    reviewsUrl,
    isLive: false,
    emptyStateMessage,
    reviews: sampleReviews,
  };
}

type PlacesReview = {
  name?: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: { text?: string };
  authorAttribution?: { displayName?: string };
};

type PlaceDetails = {
  id?: string;
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReview[];
};

type TextSearchResponse = {
  places?: Array<{ id?: string }>;
};

function formatRelativeDate(value?: string) {
  return value?.trim() || "Recently";
}

function mapReviews(reviews: PlacesReview[] = []): ReviewPlaceholder[] {
  return reviews.slice(0, 6).map((review, index) => ({
    id: `google-review-${index + 1}`,
    reviewerName: review.authorAttribution?.displayName?.trim() || "Google user",
    reviewText: review.text?.text?.trim() || "No written review.",
    reviewDate: formatRelativeDate(review.relativePublishTimeDescription),
    rating: typeof review.rating === "number" ? review.rating.toFixed(1) : "5.0",
  }));
}

async function resolvePlaceId(apiKey: string): Promise<string | null> {
  const configuredId = process.env.GOOGLE_PLACE_ID?.trim();
  if (configuredId) return configuredId;

  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({
      textQuery: googlePlace.searchQuery,
      locationBias: {
        circle: {
          center: {
            latitude: googlePlace.latitude,
            longitude: googlePlace.longitude,
          },
          radius: 500,
        },
      },
      maxResultCount: 1,
    }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    console.error("Google Places text search failed", await response.text());
    return null;
  }

  const data = (await response.json()) as TextSearchResponse;
  return data.places?.[0]?.id ?? null;
}

async function fetchPlaceDetails(
  apiKey: string,
  placeId: string,
): Promise<PlaceDetails | null> {
  const response = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "id,rating,userRatingCount,reviews",
      },
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    console.error("Google Places details failed", await response.text());
    return null;
  }

  return (await response.json()) as PlaceDetails;
}

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const reviewsUrl = googlePlace.reviewsUrl;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();

  if (!apiKey) {
    return sampleReviewsFallback(reviewsUrl);
  }

  try {
    const placeId = await resolvePlaceId(apiKey);
    if (!placeId) {
      return sampleReviewsFallback(reviewsUrl);
    }

    const details = await fetchPlaceDetails(apiKey, placeId);
    if (!details) {
      return sampleReviewsFallback(reviewsUrl);
    }

    const reviews = mapReviews(details.reviews);
    if (reviews.length === 0) {
      return sampleReviewsFallback(reviewsUrl);
    }

    const rating =
      typeof details.rating === "number" ? details.rating.toFixed(1) : "—";
    const count =
      typeof details.userRatingCount === "number"
        ? String(details.userRatingCount)
        : "0";

    return {
      overallRating: rating,
      reviewCount: count,
      reviewsUrl,
      isLive: true,
      emptyStateMessage: "",
      reviews,
    };
  } catch (error) {
    console.error("Google Reviews fetch error", error);
    return sampleReviewsFallback(reviewsUrl);
  }
}
