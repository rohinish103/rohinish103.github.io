import Link from "next/link";
import { Award } from "lucide-react";
import { scholarships } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

export function ScholarshipsPreview() {
  return (
    <section className="section-tinted">
      <div className="section container-page">
        <SectionHeading
          eyebrow="Support"
          title="Scholarships That Reward Merit"
          description="We believe talent deserves opportunity — explore our scholarship pathways."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {scholarships.map((scholarship) => (
            <article key={scholarship.title} className="card card-hover p-5">
              <Award className="size-5 text-gold" aria-hidden />
              <h3 className="heading mt-3 text-base">{scholarship.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                {scholarship.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/scholarship" className="btn btn-primary px-6">
            Apply for Scholarship
          </Link>
        </div>
      </div>
    </section>
  );
}
