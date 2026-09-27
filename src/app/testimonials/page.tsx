import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { testimonials, googleReviews } from "@/data/testimonials";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Read what students and parents say about ${siteConfig.name}, Beawar — plus our Google review highlights.`,
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials & Reviews"
        description="Real stories from families who chose Excellence Academy for board success and competitive foundations."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Testimonials" }]} />

          <div className="mb-12 rounded-3xl border border-accent/30 bg-gradient-to-br from-gold-soft/60 via-card to-blue-soft/40 p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Google Reviews</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-display text-4xl font-bold text-primary">{googleReviews.rating}</span>
                  <div className="flex text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">
                  Based on {googleReviews.count}+ verified Google reviews
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {googleReviews.highlight}
                </p>
              </div>
              <Link href={siteConfig.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="gold">
                  View on Google <ExternalLink />
                </Button>
              </Link>
            </div>
          </div>

          <SectionHeader
            eyebrow="Stories"
            title="Student & parent voices"
            description="Every review reflects our commitment to mentorship, transparency, and measurable progress."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">“{t.text}”</p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  {t.photo ? (
                    <div className="relative size-12 shrink-0 overflow-hidden rounded-full">
                      <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="48px" />
                    </div>
                  ) : (
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-soft text-sm font-bold text-primary">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role === "parent" ? "Parent" : "Student"}
                      {t.classLabel ? ` · ${t.classLabel}` : ""}
                    </p>
                  </div>
                  {t.videoUrl ? (
                    <Link href={t.videoUrl} target="_blank" rel="noopener noreferrer">
                      <Badge className="shrink-0">Video</Badge>
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg">Share your experience with us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
