import type { Metadata } from "next";
import { Button, PageHero } from "@/components/ui";
import { FaqList } from "@/components/faq-list";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about admissions, fees, batches, and facilities at Excellence Academy, Beawar.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers about admissions, academics, fees, and campus facilities."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/faqs/", label: "FAQs" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Help Center</p>
          <h2 className="mt-1 font-display text-3xl font-semibold">20 questions parents ask us most</h2>
          <p className="mt-2 mb-8 text-sm text-muted-foreground">
            Still unsure? Book a counseling call — we are happy to walk you through batch options.
          </p>
          <FaqList items={faqs} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/admission/" variant="accent">
              Start Admission
            </Button>
            <Button href="/contact/" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
