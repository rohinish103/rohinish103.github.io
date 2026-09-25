import Link from "next/link";
import { homeFaqs } from "@/data/faqs";
import { Accordion } from "@/components/accordion";
import { SectionHeading } from "@/components/section-heading";

export function FaqPreview() {
  return (
    <section className="section container-page">
      <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion items={homeFaqs} />
        <div className="mt-8 text-center">
          <Link href="/faqs" className="btn btn-outline">
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
