"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { navLinks, quickLinks } from "@/data/site";
import { courses } from "@/data/courses";
import { posts } from "@/data/blog";
import { faqs } from "@/data/faqs";

type Entry = { href: string; title: string; group: string };

const entries: Entry[] = [
  ...navLinks.map((link) => ({ ...link, title: link.label, group: "Pages" })),
  ...quickLinks.map((link) => ({ ...link, title: link.label, group: "Pages" })),
  ...courses.map((course) => ({
    href: `/courses/${course.slug}`,
    title: course.title,
    group: "Courses",
  })),
  ...posts.map((post) => ({
    href: `/blog/${post.slug}`,
    title: post.title,
    group: "Blog",
  })),
  ...faqs.map((faq) => ({ href: "/faqs", title: faq.question, group: "FAQs" })),
];

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "/" && !open && !/input|textarea|select/i.test((event.target as HTMLElement)?.tagName ?? "")) {
        event.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries.slice(0, 8);
    return entries.filter((entry) => entry.title.toLowerCase().includes(q)).slice(0, 12);
  }, [query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search the site"
        className="grid size-9 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-primary"
      >
        <Search className="size-4" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-slate-950/50 p-4 pt-24 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Close search"
            className="absolute inset-0 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div className="card relative w-full max-w-xl overflow-hidden p-0">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <Search className="size-4 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search courses, articles, FAQs…"
                className="w-full bg-transparent text-sm outline-none"
              />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close">
                <X className="size-4 text-muted-foreground" />
              </button>
            </div>
            <ul className="max-h-80 overflow-y-auto py-2">
              {results.length === 0 ? (
                <li className="px-4 py-6 text-center text-sm text-muted-foreground">
                  No matches. Try &ldquo;Class 10&rdquo; or &ldquo;fees&rdquo;.
                </li>
              ) : (
                results.map((entry) => (
                  <li key={`${entry.group}-${entry.title}`}>
                    <Link
                      href={entry.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between gap-4 px-4 py-2 text-sm transition hover:bg-secondary"
                    >
                      <span className="line-clamp-1">{entry.title}</span>
                      <span className="shrink-0 text-[11px] uppercase tracking-wide text-muted-foreground">
                        {entry.group}
                      </span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
