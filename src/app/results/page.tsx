import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CountUp } from "@/components/count-up";
import { LineChart } from "@/components/line-chart";
import { TopperCard } from "@/components/cards";
import { resultStats, scoreProgression, toppers } from "@/data/results";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Board toppers, distinction holders, and competitive qualifiers from Excellence Academy, Beawar.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        title="Results & Achievements"
        description="Celebrating the hard work of Excellence Academy students — board toppers, distinction holders, and competitive qualifiers."
        crumbs={[{ label: "Results" }]}
      />

      <section className="section container-page">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resultStats.map((stat) => (
            <div key={stat.label} className="card px-4 py-6 text-center">
              <p className="font-display text-3xl font-semibold text-primary">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="card mt-6 p-4 sm:p-6">
          <p className="text-xs font-medium text-muted-foreground">
            Average batch score progression
          </p>
          <LineChart data={scoreProgression} className="mt-2 w-full" />
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          {toppers.length} students featured
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {toppers.map((topper) => (
            <TopperCard key={topper.name} topper={topper} />
          ))}
        </div>
      </section>
    </>
  );
}
