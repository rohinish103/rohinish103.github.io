import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { EventCard } from "@/components/cards";
import { events } from "@/data/announcements";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Workshops, motivational sessions, and competitions at Excellence Academy, Beawar.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events & Seminars"
        description="Workshops, motivational sessions, and competitions that enrich learning beyond the classroom."
        crumbs={[{ label: "Events" }]}
      />
      <section className="section container-page">
        <SectionHeading
          eyebrow="Calendar"
          title="Upcoming Events"
          description="Mark your calendar and join us on campus. Registration details are shared via WhatsApp groups."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}
