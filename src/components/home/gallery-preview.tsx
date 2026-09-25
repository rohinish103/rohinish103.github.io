import Link from "next/link";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { SectionHeading } from "@/components/section-heading";

export function GalleryPreview() {
  const items = galleryItems.slice(0, 8);

  return (
    <section className="section-tinted">
      <div className="section container-page">
        <SectionHeading
          eyebrow="Campus Life"
          title="Gallery Highlights"
          description="Campus photos will appear here once your approved images are added."
        />

        {items.length > 0 ? (
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.src}
                className="relative aspect-video overflow-hidden rounded-xl border border-border"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="card mt-10 grid place-items-center gap-3 px-6 py-14 text-center">
            <p className="text-sm text-muted-foreground">
              Photo gallery coming soon.
            </p>
            <Link href="/gallery" className="btn btn-outline">
              Open Gallery Page
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
