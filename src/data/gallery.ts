import type { GalleryItem } from "@/types";
import { mediaPaths } from "@/data/media";

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    label: "ATTACH THE IMAGE",
    aspectRatio: "4/3",
    src: mediaPaths.pizza,
    alt: "Fresh tomato basil pizza",
  },
  {
    id: "gallery-2",
    label: "ATTACH THE IMAGE",
    aspectRatio: "3/4",
    src: mediaPaths.crownPizza,
    alt: "Signature ring pizza",
  },
  {
    id: "gallery-3",
    label: "ATTACH THE IMAGE",
    aspectRatio: "1/1",
    src: mediaPaths.gourmetBurgerBoard,
    alt: "Gourmet burger board with fries",
  },
  {
    id: "gallery-4",
    label: "ATTACH THE IMAGE",
    aspectRatio: "16/9",
    src: mediaPaths.sharingFeast,
    alt: "Friends sharing burgers and loaded fries",
  },
  {
    id: "gallery-5",
    label: "ATTACH THE IMAGE",
    aspectRatio: "3/4",
    src: mediaPaths.wrap,
    alt: "Grilled chicken wrap",
  },
  {
    id: "gallery-6",
    label: "ATTACH THE IMAGE",
    aspectRatio: "4/3",
    src: mediaPaths.friedChicken,
    alt: "Crispy fried chicken",
  },
  {
    id: "gallery-7",
    label: "ATTACH THE IMAGE",
    aspectRatio: "1/1",
    src: mediaPaths.pizzaBurgerNight,
    alt: "Pizza and burgers game night spread",
  },
  {
    id: "gallery-8",
    label: "ATTACH THE IMAGE",
    aspectRatio: "3/2",
    src: mediaPaths.cheesyFries,
    alt: "Loaded cheesy fries",
  },
];
