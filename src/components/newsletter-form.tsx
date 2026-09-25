"use client";

import { useState } from "react";
import { whatsappUrl } from "@/data/site";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setDone(true);
    window.open(
      whatsappUrl(`Please add ${email} to the Excellence Academy newsletter.`),
      "_blank",
      "noopener",
    );
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email"
        className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-gold focus:outline-none"
      />
      <button type="submit" className="btn btn-gold w-full rounded-lg">
        Subscribe
      </button>
      {done ? (
        <p className="text-xs text-white/70">Thanks! We will confirm on WhatsApp.</p>
      ) : null}
    </form>
  );
}
