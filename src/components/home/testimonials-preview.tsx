import Link from "next/link";
import { featuredTestimonials } from "@/data/testimonials";
import { site } from "@/data/site";
import { TestimonialCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";

export function TestimonialsPreview() {
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Voices"
        title="Student & Parent Success Stories"
        description={`Google rating ${site.googleReviews.rating}/5 from ${site.googleReviews.count}+ reviews`}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {featuredTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/testimonials" className="btn btn-outline">
          Read More Reviews
        </Link>
      </div>
    </section>
  );
}
