import type { Metadata } from "next";
import { Button, Card, PageHero } from "@/components/ui";
import { feePlans } from "@/data/content";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Fee Structure",
  description: "Transparent monthly, quarterly, and yearly fee plans at Excellence Academy, Beawar.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fee Structure"
        subtitle="Flexible payment plans with no hidden charges. Scholarships available for meritorious students."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/fees/", label: "Fees" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Pricing</p>
          <h2 className="mt-1 font-display text-3xl font-semibold">Choose Your Payment Plan</h2>
          <p className="mt-2 mb-8 max-w-2xl text-sm text-muted-foreground">
            Course-specific fees may vary. These plans reflect typical batch pricing — confirm exact fees during counseling.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {feePlans.map((plan) => (
              <Card key={plan.name} className={cn(plan.popular && "ring-2 ring-accent/30")}>
                {plan.popular ? (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Most Popular</p>
                ) : null}
                <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-2 font-display text-4xl font-semibold text-primary">
                  {plan.price}
                  <span className="text-base font-normal text-muted-foreground">{plan.period}</span>
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Button href="/admission/" variant={plan.popular ? "accent" : "outline"} className="mt-6 w-full">
                  Enquire Now
                </Button>
              </Card>
            ))}
          </div>
          <Card className="mt-10">
            <h3 className="font-display text-2xl font-semibold">Scholarships & Fee Waivers</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Merit-based and need-based scholarships up to 50% off. Take our scholarship test or share your previous-year marks during admission.
            </p>
            <Button href="/scholarship/" variant="outline" className="mt-4">
              View Scholarship Programs
            </Button>
          </Card>
        </div>
      </section>
    </>
  );
}
