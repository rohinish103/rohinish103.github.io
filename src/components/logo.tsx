import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-full font-display text-sm font-bold",
          tone === "light"
            ? "bg-primary text-primary-foreground"
            : "bg-gold text-[#1a1405]",
        )}
      >
        {site.shortName}
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-base font-semibold",
            tone === "dark" && "text-white",
          )}
        >
          {site.name}
        </span>
        <span
          className={cn(
            "block text-[11px]",
            tone === "dark" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {site.location}
        </span>
      </span>
    </Link>
  );
}
