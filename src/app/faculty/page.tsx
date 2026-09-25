"use client";

import { useMemo, useState } from "react";
import { Card, Initials, PageHero } from "@/components/ui";
import { faculty } from "@/data/faculty";

export default function FacultyPage() {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const q = query.toLowerCase();
    return faculty.filter((member) =>
      `${member.name} ${member.subject} ${member.credentials}`.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      <PageHero
        title="Our Faculty"
        subtitle="Meet the mentors behind Excellence Academy — experienced educators committed to clarity, discipline, and results."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/faculty/", label: "Faculty" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Expert Team</p>
            <h2 className="mt-1 font-display text-3xl font-semibold">Subject specialists you can trust</h2>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, subject, or qualification"
              className="mt-4 h-11 w-full max-w-md rounded-xl border border-input bg-background px-3 outline-none ring-ring focus-visible:ring-2"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((member) => (
              <Card key={member.name}>
                <Initials value={member.initials} />
                <h3 className="mt-4 font-display text-xl font-semibold">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.subject}</p>
                <p className="mt-1 text-xs text-muted-foreground">{member.credentials}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
