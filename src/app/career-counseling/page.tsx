import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CounselingForm } from "@/components/forms";
import { counselingTopics } from "@/data/content";

export const metadata: Metadata = {
  title: "Career Counseling",
  description:
    "Stream selection, entrance roadmaps, and one-to-one academic planning with experienced counselors.",
};

export default function CareerCounselingPage() {
  return (
    <>
      <PageHero
        title="Career Counseling"
        description="Clarity on streams, competitive exams, and long-term goals — before you choose your next batch."
        crumbs={[{ label: "Career Counseling" }]}
      />

      <section className="section container-page grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Sessions"
            title="What We Cover"
            description="Free introductory counseling for admission enquiries. Yearly plan students receive a dedicated session included in fees."
          />
          <div className="mt-8 space-y-3">
            {counselingTopics.map((topic) => (
              <article key={topic.title} className="card p-4">
                <h3 className="heading text-base">{topic.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="heading text-xl">Book a Session</h2>
          <p className="mt-1 mb-5 text-sm text-muted-foreground">
            Submit your request — we will confirm the slot on WhatsApp.
          </p>
          <CounselingForm />
        </div>
      </section>
    </>
  );
}
