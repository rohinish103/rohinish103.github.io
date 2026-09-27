"use client";

import { useMemo, useState } from "react";
import { Search, Trophy } from "lucide-react";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { ResultCard } from "@/components/shared/cards";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { results, resultStats } from "@/data/results";
import { siteConfig } from "@/data/site";
import { Input } from "@/components/ui/input";

export default function ResultsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return results;
    return results.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.classLabel.toLowerCase().includes(q) ||
        r.achievement.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <PageHero
        title="Results & Achievements"
        description={`Celebrating the hard work of ${siteConfig.name} students — board toppers, distinction holders, and competitive qualifiers.`}
      />
      <section className="section-pad premium-gradient">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Results" }]} />

          <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {resultStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm"
              >
                <p className="font-display text-3xl font-bold text-primary">
                  <AnimatedCounter value={s.value} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Trophy className="size-4 text-accent" />
              {filtered.length} student{filtered.length === 1 ? "" : "s"} featured
            </div>
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by student name…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9"
                aria-label="Search results by student name"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center">
              <p className="font-medium">No results found for that name.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((result) => (
                <ResultCard key={result.id} result={result} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
