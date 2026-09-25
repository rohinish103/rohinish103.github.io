import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Campus life, celebrations, classrooms, and milestones from Excellence Academy, Beawar.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Photo & Video Gallery"
        description="Campus life, celebrations, classrooms, and milestones from Excellence Academy, Beawar."
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="section container-page">
        <GalleryGrid />
      </section>
    </>
  );
}
