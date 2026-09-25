"use client";

import { useMemo, useState } from "react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/cards";
import { cn } from "@/lib/utils";

const filters = ["All", "School", "Foundation", "Competitive"] as const;

export function CourseList() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesFilter = active === "All" || course.category === active;
      const matchesQuery =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.level.toLowerCase().includes(q) ||
        course.subjects.some((subject) => subject.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [active, query]);

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                active === filter
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
        <label className="sm:w-64">
          <span className="sr-only">Search courses</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by class or subject"
            className="field"
          />
        </label>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        {visible.length} course{visible.length === 1 ? "" : "s"} available
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No courses match that search. Try &ldquo;Class 10&rdquo; or &ldquo;NEET&rdquo;.
        </p>
      ) : null}
    </>
  );
}
