"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition hover:text-primary"
            >
              {item.question}
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 text-muted-foreground transition-transform",
                  open && "rotate-180",
                )}
              />
            </button>
            {open ? (
              <p className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
