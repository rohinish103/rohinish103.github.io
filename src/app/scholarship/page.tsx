import type { Metadata } from "next";
import { Button, Card, PageHero } from "@/components/ui";
import { scholarships } from "@/data/content";
import { whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Scholarships",
  description: "Merit and need-based scholarships at Excellence Academy, Beawar.",
};

export default function ScholarshipPage() {
  return (
    <>
      <PageHero
        title="Scholarship Programs"
        subtitle="Rewarding talent and supporting deserving students with transparent, merit-based fee benefits."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/scholarship/", label: "Scholarships" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <h2 className="font-display text-3xl font-semibold">Types of Scholarships</h2>
          <p className="mt-2 mb-8 max-w-2xl text-sm text-muted-foreground">
            Each program is verified during admission counseling. Benefits apply to selected courses and payment plans.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {scholarships.map((item) => (
              <Card key={item.title}>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
          <h2 className="mt-12 font-display text-3xl font-semibold">How to Apply</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Fill the admission enquiry form with your latest marksheet details.</li>
            <li>Attend the scholarship eligibility discussion during counseling.</li>
            <li>Appear for the entrance scholarship test (if applicable for your course).</li>
            <li>Receive your scholarship letter before fee confirmation.</li>
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/admission/" variant="accent">
              Apply for Admission
            </Button>
            <Button href={whatsappUrl("Hi! I want to ask about scholarships.")} variant="outline">
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
