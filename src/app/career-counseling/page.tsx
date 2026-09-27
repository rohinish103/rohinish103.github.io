"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Compass, GraduationCap, Target } from "lucide-react";
import { Breadcrumbs, PageHero, SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/utils";

const counselingSchema = z.object({
  studentName: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone required"),
  classLabel: z.string().min(1, "Class is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  concern: z.string().min(10, "Please describe your goals or questions"),
});

type CounselingValues = z.infer<typeof counselingSchema>;

const highlights = [
  {
    icon: Target,
    title: "Stream & Career Mapping",
    text: "Science, Commerce, or Arts — with realistic pathways for boards and entrances.",
  },
  {
    icon: GraduationCap,
    title: "Entrance Roadmaps",
    text: "JEE, NEET, CUET, and olympiad guidance tailored to your current class.",
  },
  {
    icon: Compass,
    title: "One-to-One Sessions",
    text: "30–45 minute sessions with senior counselors; parents welcome.",
  },
];

export default function CareerCounselingPage() {
  const form = useForm<CounselingValues>({
    resolver: zodResolver(counselingSchema),
    defaultValues: {
      studentName: "",
      phone: "",
      classLabel: "",
      preferredDate: "",
      concern: "",
    },
  });

  const onSubmit = (values: CounselingValues) => {
    const msg = [
      `*Career Counseling Booking — ${siteConfig.name}*`,
      "",
      `*Student:* ${values.studentName}`,
      `*Class:* ${values.classLabel}`,
      `*Phone:* ${values.phone}`,
      `*Preferred Date:* ${values.preferredDate}`,
      `*Goals / Questions:* ${values.concern}`,
    ].join("\n");
    window.open(whatsappLink(siteConfig.whatsapp, msg), "_blank");
  };

  return (
    <>
      <PageHero
        title="Career Counseling"
        description="Clarity on streams, competitive exams, and long-term goals — before you choose your next batch."
      />
      <section className="section-pad">
        <div className="container-premium">
          <Breadcrumbs items={[{ label: "Career Counseling" }]} />
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                title="What We Cover"
                description="Free introductory counseling for admission enquiries. Yearly plan students receive a dedicated session included in fees."
              />
              <ul className="space-y-4">
                {highlights.map((h) => (
                  <li key={h.title} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-soft text-primary">
                      <h.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{h.title}</h3>
                      <p className="text-sm text-muted-foreground">{h.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <form
              className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <h2 className="font-display text-2xl font-semibold">Book a Session</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Submit your request — we will confirm slot on WhatsApp.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="studentName">Student Name</Label>
                  <Input id="studentName" className="mt-1" {...form.register("studentName")} />
                  {form.formState.errors.studentName ? (
                    <p className="mt-1 text-xs text-destructive">
                      {form.formState.errors.studentName.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="classLabel">Class</Label>
                  <Input id="classLabel" placeholder="e.g. Class 10" className="mt-1" {...form.register("classLabel")} />
                  {form.formState.errors.classLabel ? (
                    <p className="mt-1 text-xs text-destructive">
                      {form.formState.errors.classLabel.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="phone">Phone / WhatsApp</Label>
                  <Input id="phone" type="tel" className="mt-1" {...form.register("phone")} />
                  {form.formState.errors.phone ? (
                    <p className="mt-1 text-xs text-destructive">
                      {form.formState.errors.phone.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input id="preferredDate" type="date" className="mt-1" {...form.register("preferredDate")} />
                  {form.formState.errors.preferredDate ? (
                    <p className="mt-1 text-xs text-destructive">
                      {form.formState.errors.preferredDate.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="concern">Your goals or questions</Label>
                  <Textarea id="concern" rows={4} className="mt-1" {...form.register("concern")} />
                  {form.formState.errors.concern ? (
                    <p className="mt-1 text-xs text-destructive">
                      {form.formState.errors.concern.message}
                    </p>
                  ) : null}
                </div>
                <Button type="submit" className="w-full">
                  Request via WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
