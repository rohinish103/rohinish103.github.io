import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/cards";
import { testimonials } from "@/data/testimonials";
import { site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real stories from families who chose Excellence Academy for board success and competitive foundations.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials & Reviews"
        description="Real stories from families who chose Excellence Academy for board success and competitive foundations."
        crumbs={[{ label: "Testimonials" }]}
      />

      <section className="section container-page">
        <div className="card flex flex-col items-center gap-3 p-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="eyebrow">Google Reviews</p>
            <p className="font-display text-4xl font-semibold text-primary">
              {site.googleReviews.rating}
            </p>
          </div>
          <div className="sm:ml-4">
            <div className="flex justify-center gap-1 text-gold sm:justify-start">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Based on {site.googleReviews.count}+ verified Google reviews.
              Parents love the personal mentorship and consistent results.
            </p>
          </div>
          <a
            href="https://www.google.com/search?q=Excellence+Academy+Beawar+reviews"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline sm:ml-auto"
          >
            View on Google
          </a>
        </div>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Stories"
            title="Student & parent voices"
            description="Every review reflects our commitment to mentorship, transparency, and measurable progress."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappUrl(
              `Hello ${site.name}, I would like to share my experience.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold px-6"
          >
            Share your experience with us
          </a>
        </div>
      </section>
    </>
  );
}
