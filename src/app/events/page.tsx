import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/announcements";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description: `Seminars, workshops, and campus events at ${siteConfig.name}, Beawar.`,
};

function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventsPage() {
  const sorted = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <>
      <PageHero
        title="Events & Seminars"
        description="Workshops, motivational sessions, and competitions that enrich learning beyond the classroom."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Events" }]} />
          <SectionHeader
            title="Upcoming Events"
            description="Mark your calendar and join us on campus. Registration details are shared via WhatsApp groups."
            align="center"
          />
          <div className="space-y-4">
            {sorted.map((event) => (
              <article
                key={event.id}
                className="card-lift flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-semibold">{event.title}</h3>
                    <Badge>{event.type}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                </div>
                <p className="flex shrink-0 items-center gap-2 text-sm font-medium text-primary">
                  <CalendarDays className="size-4" />
                  {formatEventDate(event.date)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
