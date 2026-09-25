import type { Metadata } from "next";
import { Card, PageHero } from "@/components/ui";
import { events } from "@/data/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Workshops, motivational sessions, and competitions that enrich learning beyond the classroom.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events & Seminars"
        subtitle="Workshops, motivational sessions, and competitions that enrich learning beyond the classroom."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/events/", label: "Events" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <h2 className="mb-6 font-display text-3xl font-semibold">Upcoming Events</h2>
          <p className="mb-8 text-sm text-muted-foreground">
            Mark your calendar and join us on campus. Registration details are shared via WhatsApp groups.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {events.map((event) => (
              <Card key={event.title}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{event.title}</h3>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-primary">{event.type}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{event.text}</p>
                <p className="mt-3 text-sm font-medium">{event.dateLabel}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
