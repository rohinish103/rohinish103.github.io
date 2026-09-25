import Link from "next/link";
import {
  resultStats,
  scoreProgression,
  toppers,
  topperOfTheMonth,
} from "@/data/results";
import { CountUp } from "@/components/count-up";
import { LineChart } from "@/components/line-chart";
import { SectionHeading } from "@/components/section-heading";
import { TopperCard } from "@/components/cards";
import { initials } from "@/lib/utils";

export function TopperSpotlight() {
  return (
    <section className="container-page py-12">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#0b4f9c] to-[#0a3f7d] text-white">
        <div className="grid items-center gap-6 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
          <div className="grid size-28 place-items-center rounded-xl border-2 border-white/40 bg-white/10 font-display text-3xl font-bold text-gold">
            {initials(topperOfTheMonth.name)}
          </div>
          <div>
            <span className="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-[#1a1405] uppercase">
              Topper of the Month
            </span>
            <h2 className="heading mt-2 text-2xl sm:text-3xl">
              {topperOfTheMonth.name}
            </h2>
            <p className="mt-1 text-sm text-white/80">
              {topperOfTheMonth.course} · {topperOfTheMonth.percentage}% ·{" "}
              {topperOfTheMonth.highlight} · Beawar District
            </p>
            <p className="mt-3 max-w-xl text-sm text-white/75">
              Celebrating consistency, discipline, and mentorship — the Excellence
              Academy way.
            </p>
            <Link href="/results" className="btn btn-gold mt-4">
              View All Results
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResultsPreview() {
  return (
    <section className="section-tinted">
      <div className="section container-page">
        <SectionHeading
          eyebrow="Results"
          title="Success Stories in Numbers"
          description="Transparent outcomes that parents trust — tracked, celebrated, and continuously improved."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resultStats.map((stat) => (
            <div key={stat.label} className="card px-4 py-6 text-center">
              <p className="font-display text-3xl font-semibold text-primary">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="card mt-4 p-4 sm:p-6">
          <p className="text-xs font-medium text-muted-foreground">
            Average batch score progression
          </p>
          <LineChart data={scoreProgression} className="mt-2 w-full" />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {toppers.slice(0, 4).map((topper) => (
            <TopperCard key={topper.name} topper={topper} />
          ))}
        </div>
      </div>
    </section>
  );
}
