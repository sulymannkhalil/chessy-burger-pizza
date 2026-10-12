import type { GalleryItem } from "@/types";
import { mediaPaths } from "@/data/media";

export const galleryItems: GalleryItem[] = mediaPaths.gallery.map(
  (src, index) => ({
    id: `gallery-${index + 1}`,
    label: "ATTACH THE IMAGE",
    aspectRatio: "1/1",
    src,
    alt: `Chessy Pizza and Burger gallery ${index + 1}`,
  }),
);
