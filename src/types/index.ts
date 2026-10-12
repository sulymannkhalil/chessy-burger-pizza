export type MediaKind = "image" | "video";

export type AspectRatio =
  | "1/1"
  | "4/3"
  | "3/4"
  | "16/9"
  | "9/16"
  | "3/2"
  | "2/3";

export interface MediaAsset {
  src?: string;
  alt?: string;
  label: string;
  aspectRatio?: AspectRatio;
  kind?: MediaKind;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Set only when a real URL is available */
  available: boolean;
}

export interface OpeningHoursEntry {
  days: string;
  hours: string;
}

export interface ContactInfo {
  addressLines: string[];
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  /** Omit or leave empty to hide email in the UI */
  email?: string;
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
  googleReviewsUrl: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: MediaAsset;
  popular?: boolean;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export interface GalleryItem {
  id: string;
  label: string;
  aspectRatio: AspectRatio;
  src?: string;
  alt?: string;
}

export interface ReviewPlaceholder {
  id: string;
  reviewerName: string;
  reviewText: string;
  reviewDate: string;
  rating: string;
}

export interface GoogleReviewsData {
  overallRating: string;
  reviewCount: string;
  reviewsUrl: string;
  reviews: ReviewPlaceholder[];
  isLive: boolean;
  emptyStateMessage: string;
}
