import type { Metadata } from "next";
import { Card, PageHero } from "@/components/ui";
import { CounselingForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Career Counseling",
  description: "Clarity on streams, competitive exams, and long-term goals — before you choose your next batch.",
};

export default function CareerCounselingPage() {
  return (
    <>
      <PageHero
        title="Career Counseling"
        subtitle="Clarity on streams, competitive exams, and long-term goals — before you choose your next batch."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/career-counseling/", label: "Career Counseling" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold">What We Cover</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">
              Free introductory counseling for admission enquiries. Yearly plan students receive a dedicated session included in fees.
            </p>
            <div className="space-y-4">
              {[
                ["Stream & Career Mapping", "Science, Commerce, or Arts — with realistic pathways for boards and entrances."],
                ["Entrance Roadmaps", "JEE, NEET, CUET, and olympiad guidance tailored to your current class."],
                ["One-to-One Sessions", "30–45 minute sessions with senior counselors; parents welcome."],
              ].map(([title, text]) => (
                <Card key={title}>
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </Card>
              ))}
            </div>
          </div>
          <Card>
            <h2 className="mb-2 font-display text-2xl font-semibold">Book a Session</h2>
            <p className="mb-5 text-sm text-muted-foreground">Submit your request — we will confirm slot on WhatsApp.</p>
            <CounselingForm />
          </Card>
        </div>
      </section>
    </>
  );
}
