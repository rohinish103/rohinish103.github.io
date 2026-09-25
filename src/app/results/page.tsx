import type { Metadata } from "next";
import { Card, Initials, PageHero } from "@/components/ui";
import { results, resultStats } from "@/data/results";

export const metadata: Metadata = {
  title: "Results",
  description: "Celebrating the hard work of Excellence Academy students — board toppers, distinction holders, and competitive qualifiers.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        title="Results & Achievements"
        subtitle="Celebrating the hard work of Excellence Academy students — board toppers, distinction holders, and competitive qualifiers."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/results/", label: "Results" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {resultStats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <p className="font-display text-3xl font-semibold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
          <p className="mb-6 text-sm text-muted-foreground">{results.length} students featured</p>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {results.map((result) => (
              <Card key={`${result.name}-${result.highlight}`}>
                {result.badge ? (
                  <span className="mb-3 inline-block rounded-full bg-gold-soft px-2 py-0.5 text-[11px] font-semibold">
                    Topper
                  </span>
                ) : null}
                <div className="flex items-center gap-3">
                  <Initials value={result.initials} />
                  <div>
                    <h3 className="font-display text-lg font-semibold">{result.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {result.program} · {result.year}
                    </p>
                  </div>
                </div>
                <p className="mt-4 font-display text-3xl font-semibold text-primary">{result.percent}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {result.marks} · {result.highlight}
                  {result.badge ? ` · ${result.badge}` : ""}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
