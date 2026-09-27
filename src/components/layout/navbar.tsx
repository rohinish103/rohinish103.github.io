"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { mainNav, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { courses } from "@/data/courses";
import { blogs } from "@/data/blogs";
import { faculty } from "@/data/faculty";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const results = query.trim()
    ? [
        ...courses
          .filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 4)
          .map((c) => ({ label: c.name, href: `/courses/${c.slug}`, type: "Course" })),
        ...faculty
          .filter((f) => f.name.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 3)
          .map((f) => ({ label: f.name, href: "/faculty", type: "Faculty" })),
        ...blogs
          .filter((b) => b.title.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 3)
          .map((b) => ({ label: b.title, href: `/blog/${b.slug}`, type: "Blog" })),
      ]
    : [];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass shadow-md" : "bg-transparent"
      )}
    >
      <div className="container-premium flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-deep font-display text-sm font-bold text-primary-foreground shadow-md">
            {siteConfig.shortName}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-semibold text-foreground">
              {siteConfig.name}
            </span>
            <span className="text-[11px] text-muted-foreground">{siteConfig.location}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary",
                pathname === item.href ? "bg-secondary text-primary" : "text-foreground/80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <Search />
          </Button>
          {mounted ? (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          ) : (
            <div className="size-10" />
          )}
          <Link href="/admission" className="hidden sm:block">
            <Button variant="gold" size="sm">
              Admission Open
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {searchOpen ? (
        <div className="border-t border-border bg-background/95 px-4 py-3 backdrop-blur">
          <div className="container-premium relative">
            <Input
              autoFocus
              placeholder="Search courses, faculty, blogs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Site search"
            />
            {results.length > 0 ? (
              <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                {results.map((r) => (
                  <li key={r.href + r.label}>
                    <Link
                      href={r.href}
                      className="flex items-center justify-between px-4 py-3 text-sm hover:bg-muted"
                    >
                      <span>{r.label}</span>
                      <span className="text-xs text-muted-foreground">{r.type}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ) : null}

      {open ? (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="container-premium flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/admission" className="mt-2">
              <Button variant="gold" className="w-full">
                Admission Open
              </Button>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
