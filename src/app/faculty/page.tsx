"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { FacultyCard } from "@/components/shared/cards";
import { faculty } from "@/data/faculty";
import { siteConfig } from "@/data/site";
import { Input } from "@/components/ui/input";

export default function FacultyPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faculty;
    return faculty.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subject.toLowerCase().includes(q) ||
        p.qualification.toLowerCase().includes(q) ||
        p.intro.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <PageHero
        title="Our Faculty"
        description={`Meet the mentors behind ${siteConfig.name} — experienced educators committed to clarity, discipline, and results.`}
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Faculty" }]} />
          <SectionHeader
            align="left"
            eyebrow="Expert Team"
            title="Subject specialists you can trust"
            description="Search by name, subject, or qualification to find your mentor."
            className="mb-8"
          />

          <div className="relative mb-8 max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search faculty…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
              aria-label="Search faculty"
            />
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
              <p className="font-medium">No faculty match your search.</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((person) => (
                <FacultyCard key={person.id} person={person} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
