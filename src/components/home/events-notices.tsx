import Link from "next/link";
import { events, pinnedNotices } from "@/data/announcements";
import { EventCard } from "@/components/cards";

export function EventsAndNotices() {
  return (
    <section className="section container-page grid gap-10 lg:grid-cols-2">
      <div>
        <p className="eyebrow">Events</p>
        <h2 className="heading mt-2 text-3xl">Upcoming Events</h2>
        <div className="mt-6 space-y-3">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
        <Link href="/events" className="btn btn-outline mt-6">
          All Events
        </Link>
      </div>

      <div>
        <p className="eyebrow">Notice Board</p>
        <h2 className="heading mt-2 text-3xl">Pinned Announcements</h2>
        <div className="mt-6 space-y-3">
          {pinnedNotices.map((notice) => (
            <article
              key={notice.title}
              className="rounded-xl border border-gold/35 bg-gold-soft/60 p-4"
            >
              <p className="text-[10px] font-bold tracking-wide text-gold uppercase">
                Pinned
              </p>
              <h3 className="heading mt-1 text-base">{notice.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{notice.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
