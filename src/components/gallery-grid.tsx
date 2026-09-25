"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        {["All", ...galleryCategories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
              active === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <figure
              key={item.src}
              className="relative aspect-video overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-300 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      ) : (
        <div className="card mt-8 px-6 py-16 text-center">
          <h2 className="heading text-lg">Photos coming soon</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Gallery images have been cleared. Add your real campus photos in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              src/data/gallery.ts
            </code>{" "}
            when ready.
          </p>
        </div>
      )}
    </>
  );
}
