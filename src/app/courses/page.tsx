"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { CourseCard } from "@/components/shared/cards";
import { courses } from "@/data/courses";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categoryFilters = [
  { value: "all", label: "All Courses" },
  { value: "school", label: "School" },
  { value: "foundation", label: "Foundation" },
  { value: "competitive", label: "Competitive" },
] as const;

function CoursesListing() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      const matchesCategory = category === "all" || c.category === category;
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.classLabel.toLowerCase().includes(q) ||
        c.subjects.some((s) => s.toLowerCase().includes(q)) ||
        c.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((f) => (
            <Button
              key={f.value}
              type="button"
              size="sm"
              variant={category === f.value ? "default" : "outline"}
              onClick={() => setCategory(f.value)}
            >
              {f.label}
            </Button>
          ))}
        </div>
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses, subjects, class…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
            aria-label="Search courses"
          />
        </div>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        Showing{" "}
        <span className={cn("font-semibold text-foreground")}>{filtered.length}</span>{" "}
        {filtered.length === 1 ? "course" : "courses"}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
          <p className="font-medium">No courses match your search.</p>
          <p className="mt-1 text-sm text-muted-foreground">Try a different keyword or category.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </>
  );
}

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Our Courses"
        description="Structured programs from Class 6 through board excellence, foundations, and competitive exam prep."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Courses" }]} />
          <Suspense
            fallback={
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-72 animate-pulse rounded-2xl bg-muted" />
                ))}
              </div>
            }
          >
            <CoursesListing />
          </Suspense>
        </div>
      </section>
    </>
  );
}
