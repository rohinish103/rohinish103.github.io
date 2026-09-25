import type { Metadata } from "next";
import { Button, Card, PageHero } from "@/components/ui";
import { previousPapers } from "@/data/content";

export const metadata: Metadata = {
  title: "Previous Year Papers",
  description: "Practice with past board papers and sample tests aligned to RBSE and competitive patterns.",
};

export default function PreviousYearPapersPage() {
  return (
    <>
      <PageHero
        title="Previous Year Papers"
        subtitle="Practice with past board papers and sample tests aligned to RBSE and competitive patterns."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/previous-year-papers/", label: "Previous Year Papers" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <h2 className="mb-2 font-display text-3xl font-semibold">Download Papers</h2>
          <p className="mb-8 text-sm text-muted-foreground">
            Use these for timed practice. Discuss solutions in weekly doubt clinics.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {previousPapers.map((item) => (
              <Card key={item.title} className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {item.klass} · {item.size}
                  </p>
                </div>
                <Button href="/contact/" variant="outline">
                  Download PDF
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
