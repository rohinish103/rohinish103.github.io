import type { Metadata } from "next";
import { Card, PageHero } from "@/components/ui";
import { examCalendar } from "@/data/content";

export const metadata: Metadata = {
  title: "Exam Calendar",
  description: "Weekly tests, monthly cumulatives, and mock exams — plan your revision accordingly.",
};

export default function ExamCalendarPage() {
  return (
    <>
      <PageHero
        title="Exam Calendar"
        subtitle="Weekly tests, monthly cumulatives, and mock exams — plan your revision accordingly."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/exam-calendar/", label: "Exam Calendar" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <h2 className="font-display text-3xl font-semibold">Upcoming Assessments</h2>
          <p className="mt-2 mb-8 text-sm text-muted-foreground">
            Syllabus notifications are posted at least one week before each test.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {examCalendar.map((item) => (
              <Card key={item.title}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-primary">{item.type}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.klass}</p>
                <p className="mt-3 text-sm font-medium">{item.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
