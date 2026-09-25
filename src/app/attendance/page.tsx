import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { AttendanceLookup } from "@/components/forms";

export const metadata: Metadata = {
  title: "Attendance Portal",
  description:
    "Demo attendance portal for Excellence Academy students and parents.",
};

export default function AttendancePage() {
  return (
    <>
      <PageHero
        title="Student Attendance Portal"
        description="Demo portal for viewing attendance. Full login integration coming soon."
        crumbs={[{ label: "Attendance" }]}
      />
      <section className="section container-page max-w-2xl">
        <p className="rounded-xl border border-gold/35 bg-gold-soft/60 px-4 py-3 text-sm text-muted-foreground">
          UI preview only — no live data. Try sample IDs:{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">
            EA2024001
          </code>{" "}
          or{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">
            EA2024012
          </code>
          .
        </p>
        <div className="mt-6">
          <AttendanceLookup />
        </div>
      </section>
    </>
  );
}
