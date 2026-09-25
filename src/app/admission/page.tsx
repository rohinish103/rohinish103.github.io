import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { AdmissionForm } from "@/components/forms";
import { admissionSteps } from "@/data/content";
import { CountUp } from "@/components/count-up";

export const metadata: Metadata = {
  title: "Admission",
  description:
    "Submit your admission enquiry and our team will guide you through counseling, demo class, and enrollment.",
};

export default function AdmissionPage() {
  return (
    <>
      <PageHero
        title="Admission Enquiry"
        description="Submit your details and our team will guide you through counseling, demo class, and enrollment."
        crumbs={[{ label: "Admission" }]}
      />

      <section className="section container-page grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <div className="rounded-xl border border-gold/35 bg-gold-soft/60 p-4">
            <p className="font-display text-base font-semibold">
              Admissions are open for 2026–27.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              <CountUp value={47} className="font-semibold text-primary" /> families
              enquired this month — limited batch seats available.
            </p>
          </div>

          <ol className="mt-6 space-y-3">
            {admissionSteps.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold">{step.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <AdmissionForm />
      </section>
    </>
  );
}
