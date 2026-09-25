import { batches } from "@/data/announcements";
import { BatchCard } from "@/components/cards";
import { Countdown } from "@/components/countdown";
import { SectionHeading } from "@/components/section-heading";

export function BatchesPreview() {
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Upcoming"
        title="Upcoming Batches"
        description="Secure your seat early — popular batches fill quickly."
      />
      <div className="mt-8">
        <Countdown targets={batches.map((batch) => batch.startDate)} />
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {batches.map((batch) => (
          <BatchCard key={batch.name} batch={batch} />
        ))}
      </div>
    </section>
  );
}
