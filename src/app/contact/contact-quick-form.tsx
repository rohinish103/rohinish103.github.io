"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.union([z.literal(""), z.string().email("Enter a valid email")]),
  message: z.string().min(10, "Please share a brief message (min 10 characters)"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactQuickForm() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = (values: ContactValues) => {
    const lines = [
      `Hi ${siteConfig.name}!`,
      "I would like to get in touch.",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
    ];
    if (values.email?.trim()) lines.push(`Email: ${values.email.trim()}`);
    lines.push(`Message: ${values.message}`);
    window.open(whatsappLink(siteConfig.whatsapp, lines.join("\n")), "_blank");
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="font-display text-xl font-semibold">Quick contact</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Submit the form — we will open WhatsApp with your message pre-filled.
      </p>
      <form className="mt-5 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="contact-name">Your name</Label>
          <Input id="contact-name" className="mt-1" {...form.register("name")} />
          {form.formState.errors.name ? (
            <p className="mt-1 text-xs text-destructive">{form.formState.errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="contact-phone">Phone</Label>
          <Input id="contact-phone" type="tel" className="mt-1" {...form.register("phone")} />
          {form.formState.errors.phone ? (
            <p className="mt-1 text-xs text-destructive">{form.formState.errors.phone.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="contact-email">Email (optional)</Label>
          <Input id="contact-email" type="email" className="mt-1" {...form.register("email")} />
          {form.formState.errors.email ? (
            <p className="mt-1 text-xs text-destructive">{form.formState.errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            rows={4}
            className="mt-1"
            placeholder="Ask about batches, fees, demo class…"
            {...form.register("message")}
          />
          {form.formState.errors.message ? (
            <p className="mt-1 text-xs text-destructive">{form.formState.errors.message.message}</p>
          ) : null}
        </div>
        <Button type="submit" variant="gold" className="w-full">
          Send via WhatsApp
        </Button>
      </form>
    </div>
  );
}
