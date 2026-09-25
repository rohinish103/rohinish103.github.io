import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CountUp } from "@/components/count-up";
import { SectionHeading } from "@/components/section-heading";
import { milestones } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a Beawar coaching institute built on mentorship, measurable results, and parent trust.`,
};

const stats = [
  { value: 10, suffix: "+", label: "Years" },
  { value: 500, suffix: "+", label: "Students" },
  { value: 25, suffix: "+", label: "Faculty" },
  { value: 98, suffix: "%", label: "Success" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${site.name}`}
        description="A Beawar coaching institute built on mentorship, measurable results, and parent trust."
        crumbs={[{ label: "About" }]}
      />

      <section className="section container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-sm text-muted-foreground sm:text-base">
          <p>
            <strong className="text-foreground">{site.name}</strong> was founded
            with a clear purpose: make premium academic coaching accessible to
            students in Beawar through experienced faculty, small batches, and a
            culture of disciplined excellence.
          </p>
          <p>
            We combine board-focused teaching with competitive foundations, weekly
            assessments, and personal mentoring so every learner progresses with
            clarity and confidence.
          </p>
          <p>
            Parents choose us for transparent communication, consistent results, and
            an environment that feels both rigorous and supportive.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="card px-4 py-6 text-center">
              <p className="font-display text-2xl font-semibold text-primary">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tinted">
        <div className="section container-page">
          <SectionHeading
            eyebrow="Milestones"
            title="Achievements & Awards Timeline"
          />
          <ol className="mt-10 space-y-4 border-l border-border pl-6">
            {milestones.map((milestone) => (
              <li key={milestone.year} className="relative">
                <span className="absolute top-2 -left-[31px] size-2.5 rounded-full bg-gold ring-4 ring-background" />
                <div className="card p-4">
                  <p className="font-display text-sm font-semibold text-primary">
                    {milestone.year}
                  </p>
                  <h3 className="heading mt-1 text-base">{milestone.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
