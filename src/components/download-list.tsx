"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { downloadCategories, downloads } from "@/data/downloads";
import { cn } from "@/lib/utils";

export function DownloadList() {
  const [active, setActive] = useState<string>("all");

  const visible =
    active === "all"
      ? downloads
      : downloads.filter((item) => item.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {["all", ...downloadCategories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-semibold capitalize transition",
              active === category
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="mt-6 space-y-3">
        {visible.map((item) => (
          <li
            key={item.title}
            className="card card-hover flex flex-wrap items-center gap-4 p-4"
          >
            <FileText className="size-5 text-primary" aria-hidden />
            <div className="min-w-48 flex-1">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-muted-foreground capitalize">
                {item.category} · {item.className} · {item.size}
              </p>
            </div>
            <a href={item.file} download className="btn btn-outline rounded-lg">
              <Download className="size-3.5" />
              Download
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
