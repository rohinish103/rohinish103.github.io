import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FAQs",
  description: `Answers to common questions about admissions, fees, batches, and facilities at ${siteConfig.name}, Beawar.`,
};

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function FaqsPage() {
  return (
    <>
      <FaqJsonLd />
      <PageHero
        title="Frequently Asked Questions"
        description="Quick answers about admissions, academics, fees, and campus facilities."
      />
      <section className="section-pad premium-gradient">
        <div className="container-premium max-w-3xl">
          <Breadcrumbs items={[{ label: "FAQs" }]} />
          <SectionHeader
            eyebrow="Help Center"
            title={`${faqs.length} questions parents ask us most`}
            description="Still unsure? Book a counseling call — we are happy to walk you through batch options."
          />
          <Accordion>
            {faqs.map((f) => (
              <AccordionItem key={f.id} id={f.id} question={f.question} answer={f.answer} />
            ))}
          </Accordion>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/admission">
              <Button variant="gold">Start Admission</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
