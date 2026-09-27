import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-gold/30 bg-gold-soft px-2.5 py-0.5 text-xs font-semibold text-accent-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
