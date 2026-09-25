import type { Metadata } from "next";
import Link from "next/link";
import { Award } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { scholarships, scholarshipSteps } from "@/data/content";
import { site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Scholarships",
  description:
    "Merit scholarships, entrance-test scholarships, and need-based financial assistance at Excellence Academy.",
};

export default function ScholarshipPage() {
  return (
    <>
      <PageHero
        title="Scholarship Programs"
        description="Rewarding talent and supporting deserving students with transparent, merit-based fee benefits."
        crumbs={[{ label: "Scholarships" }]}
      />

      <section className="section container-page">
        <SectionHeading
          eyebrow="Programs"
          title="Types of Scholarships"
          description="Each program is verified during admission counseling. Benefits apply to selected courses and payment plans."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {scholarships.map((scholarship) => (
            <article key={scholarship.title} className="card card-hover p-5">
              <Award className="size-5 text-gold" aria-hidden />
              <h3 className="heading mt-3 text-base">{scholarship.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {scholarship.description}
              </p>
            </article>
          ))}
        </div>

        <div className="card mt-10 p-6">
          <h2 className="heading text-xl">How to Apply</h2>
          <ol className="mt-4 space-y-3">
            {scholarshipSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-xs font-semibold text-primary">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/admission" className="btn btn-primary px-6">
              Apply for Admission
            </Link>
            <a
              href={whatsappUrl(
                `Hello ${site.name}, I would like to know about scholarships.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline px-6"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
