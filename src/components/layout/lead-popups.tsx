"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone required"),
  classLabel: z.string().min(1, "Class is required"),
});

type LeadValues = z.infer<typeof leadSchema>;

export function LeadPopups() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [exitOpen, setExitOpen] = useState(false);
  const [leadDismissed, setLeadDismissed] = useState(false);
  const [exitShown, setExitShown] = useState(false);

  const form = useForm<LeadValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", phone: "", classLabel: "" },
  });

  useEffect(() => {
    const t = setTimeout(() => {
      if (!leadDismissed && !exitOpen) setLeadOpen(true);
    }, 17000);
    return () => clearTimeout(t);
  }, [leadDismissed, exitOpen]);

  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShown && !leadOpen) {
        setExitOpen(true);
        setExitShown(true);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, [exitShown, leadOpen]);

  const submitLead = (values: LeadValues) => {
    const msg = `Hi ${siteConfig.name}! I want a free demo class.\nName: ${values.name}\nPhone: ${values.phone}\nClass: ${values.classLabel}`;
    window.open(whatsappLink(siteConfig.whatsapp, msg), "_blank");
    setLeadOpen(false);
    setLeadDismissed(true);
  };

  return (
    <>
      <Dialog
        open={leadOpen}
        onClose={() => {
          setLeadOpen(false);
          setLeadDismissed(true);
        }}
        title="Book a Free Demo Class"
      >
        <p className="mb-4 text-sm text-muted-foreground">
          Experience our teaching quality before you enroll. Limited demo slots this week.
        </p>
        <form className="space-y-3" onSubmit={form.handleSubmit(submitLead)}>
          <div>
            <Label htmlFor="lead-name">Student Name</Label>
            <Input id="lead-name" {...form.register("name")} className="mt-1" />
            {form.formState.errors.name ? (
              <p className="mt-1 text-xs text-destructive">{form.formState.errors.name.message}</p>
            ) : null}
          </div>
          <div>
            <Label htmlFor="lead-phone">Phone</Label>
            <Input id="lead-phone" {...form.register("phone")} className="mt-1" />
            {form.formState.errors.phone ? (
              <p className="mt-1 text-xs text-destructive">{form.formState.errors.phone.message}</p>
            ) : null}
          </div>
          <div>
            <Label htmlFor="lead-class">Class</Label>
            <Input id="lead-class" placeholder="e.g. Class 10" {...form.register("classLabel")} className="mt-1" />
            {form.formState.errors.classLabel ? (
              <p className="mt-1 text-xs text-destructive">{form.formState.errors.classLabel.message}</p>
            ) : null}
          </div>
          <Button type="submit" variant="gold" className="w-full">
            Claim Free Demo
          </Button>
        </form>
      </Dialog>

      <Dialog
        open={exitOpen}
        onClose={() => setExitOpen(false)}
        title="Before you go…"
      >
        <p className="mb-4 text-sm text-muted-foreground">
          Book a free counseling session with our mentors and get a personalized study plan.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link href="/contact" className="flex-1" onClick={() => setExitOpen(false)}>
            <Button className="w-full">Book Counseling</Button>
          </Link>
          <Button variant="outline" className="flex-1" onClick={() => setExitOpen(false)}>
            Maybe later
          </Button>
        </div>
      </Dialog>
    </>
  );
}
