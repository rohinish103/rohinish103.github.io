import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms that apply to using the ${site.name} website and enrolling in our programs.`,
};

const sections = [
  {
    heading: "Website content",
    body: "Course details, fees, batch timings, and schedules published here are indicative and may change. Figures confirmed during counseling take precedence over the website.",
  },
  {
    heading: "Admission and fees",
    body: "Admission is confirmed only after registration formalities and fee payment. Fees once paid are non-refundable unless stated otherwise in your admission letter.",
  },
  {
    heading: "Attendance and conduct",
    body: "Students are expected to maintain regular attendance and a respectful classroom environment. The institute may discontinue enrollment for serious misconduct.",
  },
  {
    heading: "Results and testimonials",
    body: "Results, ranks, and testimonials shown on this site reflect past student performance. They are not a guarantee of individual outcomes.",
  },
  {
    heading: "Portals in preview",
    body: "The attendance and parent login pages are interface previews. They do not carry live student data until the portal integration is announced.",
  },
  {
    heading: "Contact",
    body: `For any clarification on these terms, call ${site.phone} or email ${site.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description={`Terms that apply to using the ${site.name} website and enrolling in our programs.`}
        crumbs={[{ label: "Terms of Service" }]}
      />
      <section className="section container-page max-w-3xl space-y-6">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="heading text-lg">{section.heading}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{section.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
