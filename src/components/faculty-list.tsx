"use client";

import { useMemo, useState } from "react";
import { faculty } from "@/data/faculty";
import { FacultyCard } from "@/components/cards";

export function FacultyList() {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faculty;
    return faculty.filter((member) =>
      [member.name, member.subject, member.qualification].some((field) =>
        field.toLowerCase().includes(q),
      ),
    );
  }, [query]);

  return (
    <>
      <label className="mx-auto block max-w-sm">
        <span className="sr-only">Search faculty</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search name, subject, or qualification"
          className="field"
        />
      </label>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((member) => (
          <FacultyCard key={member.name} member={member} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No faculty match that search.
        </p>
      ) : null}
    </>
  );
}
