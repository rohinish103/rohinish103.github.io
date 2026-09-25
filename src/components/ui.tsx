import Link from "next/link";
import { cn } from "@/lib/cn";

export function Button({
  href,
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}: React.ComponentProps<"button"> & {
  href?: string;
  variant?: "primary" | "accent" | "ghost" | "outline" | "white";
}) {
  const styles = {
    primary: "bg-primary text-primary-foreground shadow-md hover:bg-[var(--blue-deep)]",
    accent: "bg-accent text-accent-foreground shadow-md hover:brightness-105",
    ghost: "hover:bg-muted hover:text-foreground",
    outline: "border border-border bg-card hover:bg-muted",
    white: "border-2 border-white/40 bg-white/10 text-white hover:bg-white/20",
  }[variant];

  const classNames = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    styles,
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classNames} {...props}>
      {children}
    </button>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p
          className={cn(
            "mb-2 text-xs font-semibold uppercase tracking-[0.18em]",
            light ? "text-accent" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("font-display text-3xl font-semibold tracking-tight md:text-4xl", light && "text-white")}>
        {title}
      </h2>
      {subtitle ? (
        <p className={cn("mt-3 text-base leading-relaxed", light ? "text-white/75" : "text-muted-foreground")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle: string;
  crumbs: { href: string; label: string }[];
}) {
  return (
    <div className="border-b border-border bg-gradient-to-br from-blue-soft via-background to-gold-soft/40">
      <div className="container-premium section-pad !py-12 md:!py-16">
        <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {crumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {index > 0 ? <span>/</span> : null}
              <Link href={crumb.href} className="hover:text-primary">
                {crumb.label}
              </Link>
            </span>
          ))}
        </nav>
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("card-lift rounded-2xl border border-border bg-card p-6 shadow-sm", className)}>
      {children}
    </div>
  );
}

export function Initials({ value }: { value: string }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-deep font-display text-sm font-bold text-primary-foreground">
      {value}
    </span>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required,
  children,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5 text-sm">
      <span className="font-medium">{label}</span>
      {children ?? (
        <input
          name={name}
          type={type}
          required={required}
          className="h-11 w-full rounded-xl border border-input bg-background px-3 outline-none ring-ring focus-visible:ring-2"
        />
      )}
    </label>
  );
}
