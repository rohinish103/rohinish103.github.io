import Link from "next/link";
import { ArrowRight, Clock, Languages } from "lucide-react";
import type { Course, Faculty, Result } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="font-display text-xl font-semibold">{course.name}</h3>
        <Badge>{course.classLabel}</Badge>
      </div>
      <p className="mb-4 flex-1 text-sm text-muted-foreground">{course.description}</p>
      <div className="mb-4 space-y-2 text-xs text-muted-foreground">
        <p className="flex items-center gap-2">
          <Clock className="size-3.5 text-primary" /> {course.duration}
        </p>
        <p className="flex items-center gap-2">
          <Languages className="size-3.5 text-primary" /> {course.medium}
        </p>
        <p className="line-clamp-2">
          <span className="font-medium text-foreground">Subjects:</span>{" "}
          {course.subjects.join(", ")}
        </p>
        {course.fees ? (
          <p className="text-sm font-semibold text-primary">{course.fees}</p>
        ) : null}
      </div>
      <Link href={`/courses/${course.slug}`}>
        <Button variant="outline" className="w-full">
          View Details <ArrowRight />
        </Button>
      </Link>
    </article>
  );
}

export function FacultyCard({ person }: { person: Faculty }) {
  return (
    <article className="card-lift overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-blue-soft via-secondary to-gold-soft">
        <span className="flex size-24 items-center justify-center rounded-full bg-primary/10 font-display text-3xl font-bold text-primary">
          {initials(person.name)}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold">{person.name}</h3>
        <p className="text-sm font-medium text-primary">{person.subject}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {person.qualification} · {person.experience}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">{person.intro}</p>
      </div>
    </article>
  );
}

export function ResultCard({ result }: { result: Result }) {
  return (
    <article className="card-lift relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm">
      {result.isTopper ? (
        <span className="absolute right-0 top-0 rounded-bl-xl bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-accent-foreground">
          Topper
        </span>
      ) : null}
      <div className="flex gap-3">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-soft to-gold-soft font-display text-lg font-bold text-primary">
          {initials(result.name)}
        </div>
        <div>
          <h3 className="font-semibold">{result.name}</h3>
          <p className="text-xs text-muted-foreground">
            {result.classLabel} · {result.year}
          </p>
          <p className="mt-1 text-lg font-bold text-primary">{result.percentage}%</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <Badge className="bg-secondary text-secondary-foreground">{result.marks}</Badge>
        {result.rank ? <Badge>{result.rank}</Badge> : null}
        <Badge className="border-primary/20 bg-blue-soft text-primary">{result.achievement}</Badge>
      </div>
    </article>
  );
}
