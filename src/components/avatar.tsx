import { initials } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function Avatar({
  name,
  className,
  tone = "primary",
}: {
  name: string;
  className?: string;
  tone?: "primary" | "gold";
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid shrink-0 place-items-center rounded-full font-display font-semibold",
        tone === "primary"
          ? "bg-secondary text-primary"
          : "bg-gold-soft text-gold",
        className ?? "size-10 text-sm",
      )}
    >
      {initials(name)}
    </span>
  );
}
