import type { Metadata } from "next";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { achievements } from "@/data/batches";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}, Beawar — our mission, values, and journey in quality education.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Excellence Academy"
        description="A Beawar coaching institute built on mentorship, measurable results, and parent trust."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {siteConfig.name} was founded with a clear purpose: make premium academic coaching
                accessible to students in Beawar through experienced faculty, small batches, and a
                culture of disciplined excellence.
              </p>
              <p>
                We combine board-focused teaching with competitive foundations, weekly assessments,
                and personal mentoring so every learner progresses with clarity and confidence.
              </p>
              <p>
                Parents choose us for transparent communication, consistent results, and an
                environment that feels both rigorous and supportive.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years", value: siteConfig.stats.years, suffix: "+" },
                { label: "Students", value: siteConfig.stats.students, suffix: "+" },
                { label: "Faculty", value: siteConfig.stats.teachers, suffix: "+" },
                { label: "Success", value: siteConfig.stats.successRate, suffix: "%" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
                  <p className="font-display text-3xl font-bold text-primary">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="mt-16 font-display text-3xl font-semibold">Achievements & Awards Timeline</h2>
          <div className="mt-8 space-y-4 border-l-2 border-primary/30 pl-6">
            {achievements.map((a) => (
              <div key={a.id} className="relative">
                <span className="absolute -left-[1.95rem] top-1 size-3 rounded-full bg-accent" />
                <p className="text-sm font-semibold text-accent">{a.year}</p>
                <h3 className="font-semibold">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
