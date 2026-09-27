import type { Metadata } from "next";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { timetable } from "@/data/batches";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Class Timetable",
  description: `Weekly class schedule at ${siteConfig.name}, Beawar.`,
};

export default function TimetablePage() {
  return (
    <>
      <PageHero
        title="Class Timetable"
        description="Sample weekly schedule. Final timings are shared in your batch WhatsApp group."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Timetable" }]} />
          <SectionHeader
            title="Weekly Schedule"
            description="Subject to change during exams and holidays. Confirm with the front desk."
            align="center"
          />
          <div className="space-y-6">
            {timetable.map((day) => (
              <div key={day.day} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <h3 className="border-b border-border bg-blue-soft/50 px-4 py-3 font-display text-lg font-semibold">
                  {day.day}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="border-b border-border text-muted-foreground">
                      <tr>
                        <th className="px-4 py-2 font-medium">Time</th>
                        <th className="px-4 py-2 font-medium">Subject</th>
                        <th className="px-4 py-2 font-medium">Class</th>
                        <th className="px-4 py-2 font-medium">Faculty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.slots.map((slot) => (
                        <tr key={`${slot.time}-${slot.subject}`} className="border-b border-border last:border-0">
                          <td className="px-4 py-3 font-medium text-primary">{slot.time}</td>
                          <td className="px-4 py-3">{slot.subject}</td>
                          <td className="px-4 py-3 text-muted-foreground">{slot.classLabel}</td>
                          <td className="px-4 py-3 text-muted-foreground">{slot.faculty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
