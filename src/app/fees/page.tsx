import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { feePlans } from "@/data/batches";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Fee Structure",
  description: `Transparent monthly, quarterly, and yearly fee plans at ${siteConfig.name}, Beawar.`,
};

function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fee Structure"
        description="Flexible payment plans with no hidden charges. Scholarships available for meritorious students."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Fees" }]} />
          <SectionHeader
            eyebrow="Pricing"
            title="Choose Your Payment Plan"
            description="Course-specific fees may vary. These plans reflect typical batch pricing — confirm exact fees during counseling."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {feePlans.map((plan) => (
              <article
                key={plan.id}
                className={cn(
                  "card-lift relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm",
                  plan.popular ? "border-accent ring-2 ring-accent/30" : "border-border"
                )}
              >
                {plan.popular ? (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                ) : null}
                <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-2 font-display text-4xl font-bold text-primary">
                  {formatInr(plan.price)}
                  <span className="text-base font-normal text-muted-foreground">
                    /{plan.period === "monthly" ? "mo" : plan.period === "quarterly" ? "qtr" : "yr"}
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/admission" className="mt-6">
                  <Button variant={plan.popular ? "gold" : "outline"} className="w-full">
                    Enquire Now
                  </Button>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-gradient-to-br from-gold-soft/50 to-blue-soft/40 p-8 text-center">
            <h3 className="font-display text-2xl font-semibold">Scholarships & Fee Waivers</h3>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
              Merit-based and need-based scholarships up to 50% off. Take our scholarship test or share
              your previous-year marks during admission.
            </p>
            <Link href="/scholarship" className="mt-6 inline-block">
              <Button variant="gold">View Scholarship Programs</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
