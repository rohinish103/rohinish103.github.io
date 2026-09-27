import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { previousPapers } from "@/data/batches";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Previous Year Papers",
  description: `Board and competitive sample papers for download at ${siteConfig.name}.`,
};

export default function PreviousYearPapersPage() {
  return (
    <>
      <PageHero
        title="Previous Year Papers"
        description="Practice with past board papers and sample tests aligned to RBSE and competitive patterns."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Previous Year Papers" }]} />
          <SectionHeader
            title="Download Papers"
            description="Use these for timed practice. Discuss solutions in weekly doubt clinics."
            align="center"
          />
          <div className="space-y-3">
            {previousPapers.map((paper) => (
              <article
                key={paper.id}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold">{paper.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <Badge>{paper.classLabel}</Badge>
                    <span className="text-xs text-muted-foreground">{paper.size}</span>
                  </div>
                </div>
                <a href={paper.fileUrl} download target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Download /> Download PDF
                  </Button>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
