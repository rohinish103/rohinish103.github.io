import type { Metadata } from "next";
import { Card, PageHero } from "@/components/ui";
import { AdmissionForm } from "@/components/forms";
import { admissionSteps } from "@/data/content";

export const metadata: Metadata = {
  title: "Admission",
  description: "Submit your details and our team will guide you through counseling, demo class, and enrollment.",
};

export default function AdmissionPage() {
  return (
    <>
      <PageHero
        title="Admission Enquiry"
        subtitle="Submit your details and our team will guide you through counseling, demo class, and enrollment."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/admission/", label: "Admission" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium space-y-8">
          <p className="text-sm text-muted-foreground">
            Admissions are open for 2026–27. 47 families enquired this month — limited batch seats available.
          </p>
          <div className="grid gap-3 sm:grid-cols-5">
            {admissionSteps.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-semibold text-primary">
                  {index + 1} {step.title}
                </p>
              </div>
            ))}
          </div>
          <Card>
            <AdmissionForm />
          </Card>
        </div>
      </section>
    </>
  );
}
