import type { Metadata } from "next";
import { Button, Card, PageHero } from "@/components/ui";
import { batches } from "@/data/content";
import { whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Batches",
  description: "Upcoming batches, timings, and seat availability at Excellence Academy.",
};

export default function BatchesPage() {
  return (
    <>
      <PageHero
        title="Upcoming Batches"
        subtitle="Limited seats per batch for focused learning. Enroll early to secure your preferred timing."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/batches/", label: "Batches" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Spring 2026 Intake</p>
          <p className="mt-2 mb-8 text-sm text-muted-foreground">
            Each batch includes weekly tests, doubt sessions, and parent progress reports.
          </p>
          <div className="grid gap-4">
            {batches.map((batch) => (
              <Card key={batch.name} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold text-accent">{batch.seats} seats left</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{batch.name}</h3>
                  <p className="text-sm text-muted-foreground">{batch.course}</p>
                  <p className="mt-2 text-sm">Starts {batch.startsLabel}</p>
                  <p className="text-sm">{batch.time}</p>
                  <p className="text-sm text-muted-foreground">Faculty: {batch.faculty}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href={whatsappUrl(`Hi! I want to enroll in ${batch.name}.`)} variant="accent">
                    Enroll via WhatsApp
                  </Button>
                  <Button href="/admission/" variant="outline">
                    Admission Form
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
