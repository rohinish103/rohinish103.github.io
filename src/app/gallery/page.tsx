"use client";

import { useState } from "react";
import { Card, PageHero } from "@/components/ui";
import { gallery, galleryFilters } from "@/data/content";
import { cn } from "@/lib/cn";

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? gallery : gallery.filter((item) => item.category === filter);

  return (
    <>
      <PageHero
        title="Photo & Video Gallery"
        subtitle="Campus life, celebrations, classrooms, and milestones from Excellence Academy, Beawar."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/gallery/", label: "Gallery" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <div className="mb-8 flex flex-wrap gap-2">
            {galleryFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium",
                  filter === item ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
                )}
              >
                {item}
              </button>
            ))}
          </div>
          {visible.length === 0 ? (
            <Card className="py-16 text-center">
              <h2 className="font-display text-2xl font-semibold">Photos coming soon</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Gallery images have been cleared. Add your real campus photos in src/data/gallery.ts when ready.
              </p>
            </Card>
          ) : (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {visible.map((item) => (
                <img key={item.src} src={item.src} alt={item.alt} className="mb-4 break-inside-avoid rounded-2xl" />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
