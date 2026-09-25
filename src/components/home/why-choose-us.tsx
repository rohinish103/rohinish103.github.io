import { features } from "@/data/content";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";

export function WhyChooseUs() {
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Why Choose Excellence Academy"
        description="A complete academic ecosystem designed for board success, competitive readiness, and confident learning."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <article key={feature.title} className="card card-hover p-5">
            <span className="grid size-9 place-items-center rounded-lg bg-secondary text-primary">
              <Icon name={feature.icon} className="size-4" />
            </span>
            <h3 className="heading mt-4 text-base">{feature.title}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
