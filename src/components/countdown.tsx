"use client";

import { useEffect, useState } from "react";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "mins", label: "Mins" },
  { key: "secs", label: "Secs" },
] as const;

function remaining(target: string) {
  const diff = new Date(`${target}T00:00:00+05:30`).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / 86_400_000),
    hours: Math.floor((clamped / 3_600_000) % 24),
    mins: Math.floor((clamped / 60_000) % 60),
    secs: Math.floor((clamped / 1000) % 60),
  };
}

export function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState(() => remaining(target));

  useEffect(() => {
    const id = setInterval(() => setTime(remaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

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
