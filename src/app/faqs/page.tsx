import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Accordion } from "@/components/accordion";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Quick answers about admissions, academics, fees, and campus facilities at Excellence Academy, Beawar.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        title="Frequently Asked Questions"
        description="Quick answers about admissions, academics, fees, and campus facilities."
        crumbs={[{ label: "FAQs" }]}
      />
      <section className="section container-page">
        <SectionHeading
          eyebrow="Help Center"
          title={`${faqs.length} questions parents ask us most`}
          description="Still unsure? Book a counseling call — we are happy to walk you through batch options."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion items={faqs} />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/admission" className="btn btn-primary px-6">
              Start Admission
            </Link>
            <Link href="/contact" className="btn btn-outline px-6">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
