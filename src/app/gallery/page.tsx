"use client";

import { useMemo, useState } from "react";
import { ImageOff } from "lucide-react";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { gallery, galleryCategories } from "@/data/gallery";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    if (category === "all") return gallery;
    return gallery.filter((g) => g.category === category);
  }, [category]);

  return (
    <>
      <PageHero
        title="Photo & Video Gallery"
        description="Campus life, celebrations, classrooms, and milestones from Excellence Academy, Beawar."
      />
      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Gallery" }]} />

          <div className="mb-8 flex flex-wrap gap-2">
            {galleryCategories.map((cat) => (
              <Button
                key={cat.value}
                type="button"
                size="sm"
                variant={category === cat.value ? "default" : "outline"}
                onClick={() => setCategory(cat.value)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card/70 px-6 py-20 text-center">
              <ImageOff className="mb-4 size-10 text-muted-foreground" />
              <p className="font-display text-xl font-semibold">Photos coming soon</p>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Gallery images have been cleared. Add your real campus photos in{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">src/data/gallery.ts</code>{" "}
                when ready.
              </p>
            </div>
          ) : (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {filtered.map((item) => (
                <figure
                  key={item.id}
                  className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-blue-soft to-gold-soft">
                    <p className="px-4 text-center text-sm font-medium text-primary">{item.title}</p>
                  </div>
                  <figcaption className="p-3 text-sm font-medium">{item.title}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
