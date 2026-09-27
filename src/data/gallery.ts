import type { GalleryItem } from "@/types";

/** Add real campus photos here later — leave empty until you have approved images. */
export const gallery: GalleryItem[] = [];

export const galleryCategories = [
  { value: "all", label: "All" },
  { value: "events", label: "Events" },
  { value: "classrooms", label: "Classrooms" },
  { value: "awards", label: "Awards" },
  { value: "sports", label: "Sports" },
  { value: "functions", label: "Functions" },
  { value: "tours", label: "Study Tours" },
  { value: "videos", label: "Videos" },
] as const;
