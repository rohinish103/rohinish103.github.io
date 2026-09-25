import Link from "next/link";
import { trackingPoints } from "@/data/content";
import { scoreProgression } from "@/data/results";
import { LineChart } from "@/components/line-chart";

export function PerformanceTracking() {
  return (
    <section className="section-tinted">
      <div className="section container-page grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Tracking</p>
          <h2 className="heading mt-2 text-3xl sm:text-4xl">
            Performance Tracking Parents Can Trust
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Weekly tests, monthly reports, attendance insights, and progress
            analysis — all designed for transparency.
          </p>
          <ul className="mt-5 space-y-1.5 text-xs text-muted-foreground">
            {trackingPoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/attendance" className="btn btn-primary">
              Attendance Portal
            </Link>
            <Link href="/login/parent" className="btn btn-outline">
              Parent Login
            </Link>
          </div>
        </div>

        <div className="card p-4 sm:p-6">
          <LineChart
            data={scoreProgression}
            min={0}
            ticks={[0, 25, 50, 75, 100]}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
