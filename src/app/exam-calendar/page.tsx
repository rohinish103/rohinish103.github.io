import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { examCalendar } from "@/data/batches";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Exam Calendar",
  description: `Upcoming tests and mock exams at ${siteConfig.name}.`,
};

function formatExamDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ExamCalendarPage() {
  const sorted = [...examCalendar].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <>
      <PageHero
        title="Exam Calendar"
        description="Weekly tests, monthly cumulatives, and mock exams — plan your revision accordingly."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Exam Calendar" }]} />
          <SectionHeader
            title="Upcoming Assessments"
            description="Syllabus notifications are posted at least one week before each test."
            align="center"
          />
          <div className="space-y-4">
            {sorted.map((exam) => (
              <article
                key={exam.id}
                className="card-lift flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-semibold">{exam.title}</h3>
                    <Badge>{exam.type}</Badge>
                    <Badge className="border-border bg-muted text-foreground">{exam.classLabel}</Badge>
                  </div>
                </div>
                <p className="flex shrink-0 items-center gap-2 text-sm font-medium text-primary">
                  <CalendarClock className="size-4" />
                  {formatExamDate(exam.date)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
