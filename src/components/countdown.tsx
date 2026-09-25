"use client";

import { useClockSeconds } from "@/lib/client-store";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "mins", label: "Mins" },
  { key: "secs", label: "Secs" },
] as const;

function nextStart(targets: string[], nowMs: number) {
  const upcoming = targets
    .map((date) => new Date(`${date}T00:00:00+05:30`).getTime())
    .filter((time) => time > nowMs)
    .sort((a, b) => a - b);
  return upcoming[0] ?? null;
}

export function Countdown({ targets }: { targets: string[] }) {
  const seconds = useClockSeconds();

  // Zero only before hydration, when the client clock has not reported yet.
  if (seconds === 0) {
    return <div className="h-[68px]" aria-hidden />;
  }

  const nowMs = seconds * 1000;
  const target = nextStart(targets, nowMs);

  if (target === null) {
    return (
      <p className="text-center text-sm text-muted-foreground">
        Dates for the next intake are announced on WhatsApp — call us to reserve a
        seat.
      </p>
    );
  }

  const diff = target - nowMs;
  const time = {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    mins: Math.floor((diff / 60_000) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };

  return (
    <div className="flex justify-center gap-2 sm:gap-3">
      {UNITS.map((unit) => (
        <div key={unit.key} className="card w-16 px-2 py-2 text-center sm:w-20">
          <p className="font-display text-xl font-semibold text-primary sm:text-2xl">
            {String(time[unit.key]).padStart(2, "0")}
          </p>
          <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
}
