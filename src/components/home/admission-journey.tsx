import Link from "next/link";
import { admissionSteps } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

export function AdmissionJourney() {
  return (
    <section className="section container-page">
      <SectionHeading eyebrow="Process" title="Simple Admission Journey" />
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {admissionSteps.map((step, index) => (
          <li key={step.title} className="card card-hover p-5 text-center">
            <span className="mx-auto grid size-8 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {index + 1}
            </span>
            <h3 className="heading mt-3 text-base">{step.title}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-8 text-center">
        <Link href="/admission" className="btn btn-gold px-6">
          Start Online Admission
        </Link>
      </div>
    </section>
  );
}
