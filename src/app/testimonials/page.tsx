import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Button, Card, Initials, PageHero } from "@/components/ui";
import { testimonials } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what students and parents say about Excellence Academy, Beawar — plus our Google review highlights.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials & Reviews"
        subtitle="Real stories from families who chose Excellence Academy for board success and competitive foundations."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/testimonials/", label: "Testimonials" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <Card className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Google Reviews</p>
              <p className="font-display text-5xl font-semibold text-primary">{site.googleReviews.rating}</p>
              <p className="text-sm text-muted-foreground">
                Based on {site.googleReviews.count}+ verified Google reviews
              </p>
              <p className="mt-2 text-sm">Parents love the personal mentorship and consistent results.</p>
            </div>
            <Button href="https://www.google.com/search?q=Excellence+Academy+Beawar+reviews" variant="outline">
              View on Google
            </Button>
          </Card>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Stories</p>
          <h2 className="mb-6 font-display text-3xl font-semibold">Student & parent voices</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name}>
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed">“{item.quote}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <Initials value={item.name.replace("Mrs. ", "").replace("Mr. ", "").slice(0, 1)} />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">Share your experience with us</p>
        </div>
      </section>
    </>
  );
}
