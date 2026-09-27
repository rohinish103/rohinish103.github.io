"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  openId: string | null;
  setOpenId: (id: string | null) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export function Accordion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [openId, setOpenId] = React.useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ openId, setOpenId }}>
      <div className={cn("space-y-3", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  id,
  question,
  answer,
}: {
  id: string;
  question: string;
  answer: string;
}) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionItem must be used within Accordion");
  const open = ctx.openId === id;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <button
        type="button"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium transition-colors hover:bg-muted/50"
        onClick={() => ctx.setOpenId(open ? null : id)}
      >
        <span>{question}</span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-primary transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
