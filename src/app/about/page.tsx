import type { Metadata } from "next";
import { Card, PageHero } from "@/components/ui";
import { timeline } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Excellence Academy, Beawar — our mission, values, and journey in quality education.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Excellence Academy"
        subtitle="A Beawar coaching institute built on mentorship, measurable results, and parent trust."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about/", label: "About" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium space-y-6">
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Excellence Academy was founded with a clear purpose: make premium academic coaching accessible to students in Beawar through experienced faculty, small batches, and a culture of disciplined excellence.
          </p>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            We combine board-focused teaching with competitive foundations, weekly assessments, and personal mentoring so every learner progresses with clarity and confidence.
          </p>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Parents choose us for transparent communication, consistent results, and an environment that feels both rigorous and supportive.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["0+", "Years"],
              ["0+", "Students"],
              ["0+", "Faculty"],
              ["0%", "Success"],
            ].map(([value, label]) => (
              <Card key={label} className="text-center">
                <p className="font-display text-3xl font-semibold text-primary">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </Card>
            ))}
          </div>
          <h2 className="pt-6 font-display text-3xl font-semibold">Achievements & Awards Timeline</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {timeline.map((item) => (
              <Card key={item.year}>
                <p className="text-sm font-semibold text-primary">{item.year}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
