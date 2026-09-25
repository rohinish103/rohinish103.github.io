"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { courses, type CourseCategory } from "@/data/courses";
import { Button, Card } from "@/components/ui";
import { cn } from "@/lib/cn";

const filters: { id: "all" | CourseCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "school", label: "School" },
  { id: "foundation", label: "Foundation" },
  { id: "competitive", label: "Competitive" },
];

function Grid() {
  const params = useSearchParams();
  const initial = (params.get("category") as CourseCategory | null) ?? "all";
  const [filter, setFilter] = useState<"all" | CourseCategory>(
    filters.some((item) => item.id === initial) ? initial : "all",
  );

  const visible = useMemo(
    () => (filter === "all" ? courses : courses.filter((course) => course.category === filter)),
    [filter],
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium",
              filter === item.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((course) => (
          <Card key={course.slug} className="flex flex-col">
            <span className="mb-3 w-fit rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-primary">
              {course.classLabel}
            </span>
            <h3 className="font-display text-xl font-semibold">{course.name}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{course.overview}</p>
            <p className="mt-4 font-display text-lg font-semibold text-primary">
              {course.fees || "Contact us for a personalized fee quote."}
            </p>
            <Button href={`/courses/${course.slug}/`} variant="outline" className="mt-4">
              View Details
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}

export function CourseGrid() {
  return (
    <Suspense>
      <Grid />
    </Suspense>
  );
}
