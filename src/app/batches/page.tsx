import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { differenceInCalendarDays, parseISO } from "date-fns";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { batches } from "@/data/batches";
import { getCourseBySlug } from "@/data/courses";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Batches",
  description: `Upcoming batches, timings, and seat availability at ${siteConfig.name}.`,
};

function formatStartDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BatchesPage() {
  const today = new Date();

  return (
    <>
      <PageHero
        title="Upcoming Batches"
        description="Limited seats per batch for focused learning. Enroll early to secure your preferred timing."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Batches" }]} />
          <SectionHeader
            title="Spring 2026 Intake"
            description="Each batch includes weekly tests, doubt sessions, and parent progress reports."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {batches.map((batch) => {
              const course = getCourseBySlug(batch.courseSlug);
              const daysUntil = differenceInCalendarDays(parseISO(batch.startDate), today);
              const showCountdown = daysUntil >= 0 && daysUntil <= 60;
              const enrollMsg = `Hi ${siteConfig.name}, I want to enroll in *${batch.name}* (starts ${formatStartDate(batch.startDate)}). Please share seat availability and fee details.`;

              return (
                <article
                  key={batch.id}
                  className="card-lift flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">{batch.name}</h3>
                    <Badge className={batch.seatsLeft <= 5 ? "border-destructive/30 bg-destructive/10 text-destructive" : undefined}>
                      {batch.seatsLeft} seats left
                    </Badge>
                  </div>
                  {course ? (
                    <p className="mt-1 text-sm text-primary">{course.name}</p>
                  ) : null}
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Calendar className="size-4 text-primary" />
                      Starts {formatStartDate(batch.startDate)}
                      {showCountdown ? (
                        <span className="rounded-lg bg-accent/20 px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                          {daysUntil === 0 ? "Starts today" : `${daysUntil} days to go`}
                        </span>
                      ) : null}
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="size-4 text-primary" />
                      {batch.timing}
                    </li>
                    <li className="flex items-center gap-2">
                      <User className="size-4 text-primary" />
                      Faculty: {batch.faculty}
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <a href={whatsappLink(siteConfig.whatsapp, enrollMsg)} target="_blank" rel="noopener noreferrer">
                      <Button>Enroll via WhatsApp</Button>
                    </a>
                    <Link href="/admission">
                      <Button variant="outline">Admission Form</Button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
