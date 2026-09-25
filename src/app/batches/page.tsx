import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { BatchCard } from "@/components/cards";
import { Countdown } from "@/components/countdown";
import { batches } from "@/data/announcements";

export const metadata: Metadata = {
  title: "Batches",
  description:
    "Upcoming Excellence Academy batches with timings, faculty, and remaining seats.",
};

export default function BatchesPage() {
  return (
    <>
      <PageHero
        title="Upcoming Batches"
        description="Limited seats per batch for focused learning. Enroll early to secure your preferred timing."
        crumbs={[{ label: "Batches" }]}
      />
      <section className="section container-page">
        <SectionHeading
          eyebrow="Spring 2026 Intake"
          title="Next batch starts soon"
          description="Each batch includes weekly tests, doubt sessions, and parent progress reports."
        />
        <div className="mt-8">
          <Countdown targets={batches.map((batch) => batch.startDate)} />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {batches.map((batch) => (
            <BatchCard key={batch.name} batch={batch} detailed />
          ))}
        </div>
      </section>
    </>
  );
}
