"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navLinks, site } from "@/data/site";
import { courses } from "@/data/courses";
import { posts } from "@/data/blog";
import { Button } from "@/components/ui";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const courseHits = courses
      .filter((course) => `${course.name} ${course.overview}`.toLowerCase().includes(q))
      .map((course) => ({ href: `/courses/${course.slug}/`, label: course.name, kind: "Course" }));
    const pageHits = [
      ...navLinks.map((link) => ({ href: link.href, label: link.label, kind: "Page" })),
      { href: "/admission/", label: "Admission", kind: "Page" },
      { href: "/fees/", label: "Fee Structure", kind: "Page" },
      { href: "/scholarship/", label: "Scholarships", kind: "Page" },
    ].filter((item) => item.label.toLowerCase().includes(q));
    const blogHits = posts
      .filter((post) => `${post.title} ${post.excerpt}`.toLowerCase().includes(q))
      .map((post) => ({ href: `/blog/${post.slug}/`, label: post.title, kind: "Blog" }));
    return [...pageHits, ...courseHits, ...blogHits].slice(0, 8);
  }, [query]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled || !isHome ? "glass shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container-premium flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-deep font-display text-sm font-bold text-primary-foreground shadow-md">
            {site.shortName}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-semibold text-foreground">{site.name}</span>
            <span className="text-[11px] text-muted-foreground">{site.city}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary",
                  active ? "bg-secondary text-primary" : "text-foreground/80",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            className="inline-flex size-10 items-center justify-center rounded-xl hover:bg-muted"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-4" />
          </button>
          <ThemeToggle />
          <Button href="/admission/" variant="accent" className="hidden h-9 rounded-lg px-3 text-xs sm:inline-flex">
            Admission Open
          </Button>
          <button
            className="inline-flex size-10 items-center justify-center rounded-xl hover:bg-muted xl:hidden"
            aria-label="Menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-border bg-background px-4 py-4 xl:hidden">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm hover:bg-secondary">
                {link.label}
              </Link>
            ))}
            <Button href="/admission/" variant="accent" className="mt-2">
              Admission Open
            </Button>
          </div>
        </div>
      ) : null}
      {searchOpen ? (
        <div className="fixed inset-0 z-[80] bg-black/50 p-4" onClick={() => setSearchOpen(false)}>
          <div
            className="mx-auto mt-24 max-w-lg rounded-2xl border border-border bg-card p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search courses, pages, articles..."
              className="h-12 w-full rounded-xl border border-input bg-background px-4 outline-none ring-ring focus-visible:ring-2"
            />
            <div className="mt-3 space-y-1">
              {results.map((item) => (
                <Link
                  key={`${item.kind}-${item.href}`}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-muted"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.kind}</span>
                </Link>
              ))}
              {query && results.length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-muted-foreground">No matches found.</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
