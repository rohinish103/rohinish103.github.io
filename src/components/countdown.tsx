"use client";

import { useEffect, useState } from "react";

function parts(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    mins: Math.floor((diff / 60000) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ target }: { target: string }) {
  const [value, setValue] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => setValue(parts(target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const cells = [
    ["Days", value.days],
    ["Hours", value.hours],
    ["Mins", value.mins],
    ["Secs", value.secs],
  ] as const;

  return (
    <div className="grid grid-cols-4 gap-3">
      {cells.map(([label, count]) => (
        <div key={label} className="rounded-2xl border border-border bg-card p-4 text-center">
          <p className="font-display text-3xl font-semibold tabular-nums text-primary">{count}</p>
          <p className="mt-1 text-xs text-muted-foreground">{label}</p>
        </div>
      ))}
    </div>
  );
}
