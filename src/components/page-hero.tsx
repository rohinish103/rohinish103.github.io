import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function PageHero({
  title,
  description,
  crumbs,
}: {
  title: string;
  description: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="section-tinted border-b border-border">
      <div className="container-page py-12 lg:py-16">
        <h1 className="heading text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
        <nav aria-label="Breadcrumb" className="mt-5">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <li>
              <Link href="/" className="transition hover:text-primary">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1">
                <ChevronRight className="size-3" aria-hidden />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition hover:text-primary">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
