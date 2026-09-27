"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  MessageCircle,
  Navigation,
  Phone,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { telLink, whatsappLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end gap-2 md:bottom-6 md:right-6">
        {chatOpen ? (
          <div className="mb-1 w-72 rounded-2xl border border-border bg-card p-4 shadow-2xl">
            <p className="mb-1 flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="size-4 text-accent" /> Ask on WhatsApp
            </p>
            <p className="mb-3 text-xs text-muted-foreground">
              Admissions, demo class, fees — we reply quickly during business hours.
            </p>
            <a
              href={whatsappLink(
                siteConfig.whatsapp,
                "Hi Excellence Academy! I have a question about admissions."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full" variant="default">
                Start WhatsApp Chat
              </Button>
            </a>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setChatOpen((v) => !v)}
          className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
          aria-label="Ask on WhatsApp"
        >
          <MessageCircle className="size-6" />
        </button>

        <a
          href={telLink(siteConfig.phone)}
          className="hidden size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105 md:flex"
          aria-label="Call now"
        >
          <Phone className="size-5" />
        </a>

        <a
          href={siteConfig.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden size-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition hover:scale-105 md:flex"
          aria-label="Directions"
        >
          <Navigation className="size-5" />
        </a>

        <Link
          href="/admission"
          className="hidden size-12 items-center justify-center rounded-full bg-blue-deep text-white shadow-lg transition hover:scale-105 md:flex"
          aria-label="Admission"
        >
          <Sparkles className="size-5" />
        </Link>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition",
            showTop ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          aria-label="Back to top"
        >
          <ArrowUp className="size-5" />
        </button>
      </div>
    </>
  );
}

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-4 gap-1 px-2 py-2">
        <a href={telLink(siteConfig.phone)} className="flex flex-col items-center gap-1 rounded-lg py-2 text-[11px] font-medium hover:bg-muted">
          <Phone className="size-4 text-primary" /> Call
        </a>
        <a
          href={whatsappLink(siteConfig.whatsapp, "Hi! I want to know about admissions.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 rounded-lg py-2 text-[11px] font-medium hover:bg-muted"
        >
          <MessageCircle className="size-4 text-[#25D366]" /> WhatsApp
        </a>
        <a
          href={siteConfig.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 rounded-lg py-2 text-[11px] font-medium hover:bg-muted"
        >
          <Navigation className="size-4 text-accent" /> Directions
        </a>
        <Link href="/admission" className="flex flex-col items-center gap-1 rounded-lg py-2 text-[11px] font-medium hover:bg-muted">
          <Sparkles className="size-4 text-primary" /> Admission
        </Link>
      </div>
    </div>
  );
}
