import type { Metadata } from "next";
import Link from "next/link";
import { Award } from "lucide-react";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { scholarships, siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Scholarships",
  description: `Merit and need-based scholarships at ${siteConfig.name}, Beawar.`,
};

export default function ScholarshipPage() {
  const applyMsg = `Hi ${siteConfig.name}, I would like to apply for a scholarship. Please share details about eligibility and the scholarship test.`;

  return (
    <>
      <PageHero
        title="Scholarship Programs"
        description="Rewarding talent and supporting deserving students with transparent, merit-based fee benefits."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Scholarships" }]} />
          <SectionHeader
            title="Types of Scholarships"
            description="Each program is verified during admission counseling. Benefits apply to selected courses and payment plans."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {scholarships.map((s) => (
              <article
                key={s.title}
                className="card-lift rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-blue-soft text-primary">
                  <Award className="size-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-display text-2xl font-semibold">How to Apply</h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
              <li>Fill the admission enquiry form with your latest marksheet details.</li>
              <li>Attend the scholarship eligibility discussion during counseling.</li>
              <li>Appear for the entrance scholarship test (if applicable for your course).</li>
              <li>Receive your scholarship letter before fee confirmation.</li>
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/admission">
                <Button>Apply for Admission</Button>
              </Link>
              <a href={whatsappLink(siteConfig.whatsapp, applyMsg)} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Ask on WhatsApp</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
