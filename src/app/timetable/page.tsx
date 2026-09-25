import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { timetable } from "@/data/content";

export const metadata: Metadata = {
  title: "Class Timetable",
  description: "Sample weekly schedule. Final timings are shared in your batch WhatsApp group.",
};

export default function TimetablePage() {
  return (
    <>
      <PageHero
        title="Class Timetable"
        subtitle="Sample weekly schedule. Final timings are shared in your batch WhatsApp group."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/timetable/", label: "Timetable" },
        ]}
      />
      <section className="section-pad">
        <div className="container-premium space-y-8">
          <p className="text-sm text-muted-foreground">
            Subject to change during exams and holidays. Confirm with the front desk.
          </p>
          {Object.entries(timetable).map(([day, rows]) => (
            <div key={day} className="overflow-x-auto rounded-2xl border border-border">
              <h2 className="bg-secondary px-4 py-3 font-display text-xl font-semibold">{day}</h2>
              <table className="min-w-[560px] w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="px-4 py-2">Time</th>
                    <th className="px-4 py-2">Subject</th>
                    <th className="px-4 py-2">Class</th>
                    <th className="px-4 py-2">Faculty</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={`${day}-${row.time}-${row.subject}`} className="border-b border-border last:border-0">
                      <td className="px-4 py-3">{row.time}</td>
                      <td className="px-4 py-3">{row.subject}</td>
                      <td className="px-4 py-3">{row.klass}</td>
                      <td className="px-4 py-3">{row.faculty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
