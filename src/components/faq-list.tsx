"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(active ? null : index)}
            >
              <span className="font-medium">{item.q}</span>
              <span className="text-primary">{active ? "–" : "+"}</span>
            </button>
            <div className={cn("grid transition-all", active ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
