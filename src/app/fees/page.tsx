import type { Metadata } from "next";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { feePlans } from "@/data/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Fee Structure",
  description:
    "Flexible monthly, quarterly, and yearly payment plans with no hidden charges.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fee Structure"
        description="Flexible payment plans with no hidden charges. Scholarships available for meritorious students."
        crumbs={[{ label: "Fees" }]}
      />

      <section className="section container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose Your Payment Plan"
          description="Course-specific fees may vary. These plans reflect typical batch pricing — confirm exact fees during counseling."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {feePlans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "card relative flex flex-col p-6",
                plan.popular && "border-gold shadow-lg",
              )}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-0.5 text-[10px] font-bold tracking-wide text-[#1a1405] uppercase">
                  Most Popular
                </span>
              ) : null}
              <h3 className="heading text-lg">{plan.name}</h3>
              <p className="mt-2">
                <span className="font-display text-3xl font-semibold text-primary">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {" "}
                  / {plan.period}
                </span>
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <CircleCheck className="mt-0.5 size-4 shrink-0 text-gold" />
                    {perk}
                  </li>
                ))}
              </ul>
              <Link
                href="/admission"
                className={cn(
                  "mt-6 w-full rounded-lg btn",
                  plan.popular ? "btn-gold" : "btn-primary",
                )}
              >
                Enquire Now
              </Link>
            </article>
          ))}
        </div>

        <div className="card mt-10 p-6 text-center">
          <h2 className="heading text-xl">Scholarships & Fee Waivers</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            Merit-based and need-based scholarships up to 50% off. Take our
            scholarship test or share your previous-year marks during admission.
          </p>
          <Link href="/scholarship" className="btn btn-outline mt-4">
            View Scholarship Programs
          </Link>
        </div>
      </section>
    </>
  );
}
