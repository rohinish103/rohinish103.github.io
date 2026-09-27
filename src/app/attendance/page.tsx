"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

type AttendanceRow = {
  date: string;
  subject: string;
  status: "Present" | "Absent" | "Late";
};

const sampleRecords: Record<
  string,
  { name: string; classLabel: string; rows: AttendanceRow[] }
> = {
  EA2024001: {
    name: "Rahul Verma",
    classLabel: "Class 10",
    rows: [
      { date: "2026-03-03", subject: "Mathematics", status: "Present" },
      { date: "2026-03-04", subject: "Science", status: "Present" },
      { date: "2026-03-05", subject: "English", status: "Late" },
      { date: "2026-03-06", subject: "Mathematics", status: "Present" },
      { date: "2026-03-07", subject: "Weekly Test", status: "Present" },
      { date: "2026-03-10", subject: "Science", status: "Absent" },
    ],
  },
  EA2024012: {
    name: "Priya Singh",
    classLabel: "Class 12 Science",
    rows: [
      { date: "2026-03-03", subject: "Physics", status: "Present" },
      { date: "2026-03-04", subject: "Chemistry", status: "Present" },
      { date: "2026-03-05", subject: "Mathematics", status: "Present" },
      { date: "2026-03-06", subject: "Physics", status: "Present" },
    ],
  },
};

function statusClass(status: AttendanceRow["status"]) {
  if (status === "Present") return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400";
  if (status === "Late") return "bg-amber-500/15 text-amber-700 dark:text-amber-400";
  return "bg-destructive/15 text-destructive";
}

export default function AttendancePage() {
  const [studentId, setStudentId] = useState("");
  const [searched, setSearched] = useState<string | null>(null);
  const record = searched ? sampleRecords[searched.toUpperCase()] : null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(studentId.trim());
  };

  return (
    <>
      <PageHero
        title="Student Attendance Portal"
        description="Demo portal for viewing attendance. Full login integration coming soon."
      />
      <section className="section-pad">
        <div className="container-premium max-w-3xl">
          <Breadcrumbs items={[{ label: "Attendance" }]} />
          <p className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
            UI preview only — no live data. Try sample IDs: <strong>EA2024001</strong> or{" "}
            <strong>EA2024012</strong>.
          </p>

          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-end"
          >
            <div className="flex-1">
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                placeholder="EA2024001"
                className="mt-1"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </div>
            <Button type="submit">
              <Search /> Search
            </Button>
          </form>

          {searched && !record ? (
            <p className="mt-6 text-center text-muted-foreground">
              No record found for &quot;{searched}&quot;. Use a sample ID above.
            </p>
          ) : null}

          {record ? (
            <div className="mt-8">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="font-display text-xl font-semibold">{record.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {record.classLabel} · ID {searched?.toUpperCase()}
                  </p>
                </div>
                <Badge>
                  {record.rows.filter((r) => r.status === "Present").length} / {record.rows.length}{" "}
                  present
                </Badge>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead className="border-b border-border bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Date</th>
                      <th className="px-4 py-3 font-semibold">Subject</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {record.rows.map((row) => (
                      <tr key={`${row.date}-${row.subject}`} className="border-b border-border last:border-0">
                        <td className="px-4 py-3">
                          {new Date(row.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="px-4 py-3">{row.subject}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusClass(row.status)}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
