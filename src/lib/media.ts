import type { AspectRatio } from "@/types";

const aspectClassMap: Record<AspectRatio, string> = {
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-video",
  "9/16": "aspect-[9/16]",
  "3/2": "aspect-[3/2]",
  "2/3": "aspect-[2/3]",
};

export function getAspectClass(ratio: AspectRatio = "1/1") {
  return aspectClassMap[ratio];
}
