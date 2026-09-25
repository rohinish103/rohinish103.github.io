import { facilities } from "@/data/content";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";

export function Facilities() {
  return (
    <section className="section-tinted">
      <div className="section container-page">
        <SectionHeading eyebrow="Campus" title="Facilities Built for Focus" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <div
              key={facility.label}
              className="card card-hover flex items-center gap-3 px-4 py-3"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-secondary text-primary">
                <Icon name={facility.icon} className="size-4" />
              </span>
              <span className="text-sm font-medium">{facility.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
