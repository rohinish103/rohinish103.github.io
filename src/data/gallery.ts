export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

export type GalleryCategory =
  | "Events"
  | "Classrooms"
  | "Awards"
  | "Sports"
  | "Functions"
  | "Study Tours"
  | "Videos";

export const galleryCategories: GalleryCategory[] = [
  "Events",
  "Classrooms",
  "Awards",
  "Sports",
  "Functions",
  "Study Tours",
  "Videos",
];

/**
 * Intentionally empty: only approved photographs of the real campus should ship.
 * Drop image files into public/gallery and list them here to switch the grid on.
 */
export const galleryItems: GalleryItem[] = [];
