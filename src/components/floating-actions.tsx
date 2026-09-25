"use client";

import Link from "next/link";
import { ArrowUp, MessageCircle, Navigation, Phone, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { mapsUrl, site, whatsappUrl } from "@/data/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed right-4 bottom-24 z-40 flex flex-col gap-3 md:right-6 md:bottom-6">
        <a
          href={`tel:${site.phoneTel}`}
          className="hidden size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105 md:flex"
          aria-label="Call"
        >
          <Phone className="size-5" />
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 md:flex"
          aria-label="WhatsApp"
        >
          <MessageCircle className="size-5" />
        </a>
        <a
          href={mapsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden size-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition hover:scale-105 md:flex"
          aria-label="Directions"
        >
          <Navigation className="size-5" />
        </a>
        <Link
          href="/admission/"
          className="hidden size-12 items-center justify-center rounded-full bg-blue-deep text-white shadow-lg transition hover:scale-105 md:flex"
          aria-label="Admission"
        >
          <Sparkles className="size-5" />
        </Link>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition ${
            showTop ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="size-5" />
        </button>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur md:hidden">
        <div className="grid grid-cols-4 gap-1 px-2 py-2">
          <a href={`tel:${site.phoneTel}`} className="flex flex-col items-center gap-1 rounded-lg py-2 text-[11px] font-medium hover:bg-muted">
            <Phone className="size-4 text-primary" /> Call
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 rounded-lg py-2 text-[11px] font-medium hover:bg-muted"
          >
            <MessageCircle className="size-4 text-[#25D366]" /> WhatsApp
          </a>
          <a
            href={mapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 rounded-lg py-2 text-[11px] font-medium hover:bg-muted"
          >
            <Navigation className="size-4 text-accent" /> Directions
          </a>
          <Link href="/admission/" className="flex flex-col items-center gap-1 rounded-lg py-2 text-[11px] font-medium hover:bg-muted">
            <Sparkles className="size-4 text-primary" /> Admission
          </Link>
        </div>
      </div>
    </>
  );
}
