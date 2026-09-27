"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { admissionSteps, siteConfig } from "@/data/site";
import { courses } from "@/data/courses";
import { whatsappLink } from "@/lib/utils";

const admissionSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  fatherName: z.string().min(2, "Father's name is required"),
  motherName: z.string().min(2, "Mother's name is required"),
  classLabel: z.string().min(1, "Class is required"),
  school: z.string().min(2, "School name is required"),
  phone: z.string().min(10, "Enter a valid 10-digit phone number"),
  whatsapp: z.string().min(10, "Enter a valid WhatsApp number"),
  email: z.string().email("Enter a valid email"),
  address: z.string().min(5, "Address is required"),
  preferredCourse: z.string().min(1, "Select a preferred course"),
  message: z.string().optional(),
});

type AdmissionValues = z.infer<typeof admissionSchema>;

export default function AdmissionPage() {
  const form = useForm<AdmissionValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      studentName: "",
      fatherName: "",
      motherName: "",
      classLabel: "",
      school: "",
      phone: "",
      whatsapp: "",
      email: "",
      address: "",
      preferredCourse: "",
      message: "",
    },
  });

  const onSubmit = (values: AdmissionValues) => {
    const courseName =
      courses.find((c) => c.slug === values.preferredCourse)?.name ?? values.preferredCourse;
    const msg = [
      `*Admission Enquiry — ${siteConfig.name}*`,
      "",
      `*Student Name:* ${values.studentName}`,
      `*Father's Name:* ${values.fatherName}`,
      `*Mother's Name:* ${values.motherName}`,
      `*Class:* ${values.classLabel}`,
      `*School:* ${values.school}`,
      `*Phone:* ${values.phone}`,
      `*WhatsApp:* ${values.whatsapp}`,
      `*Email:* ${values.email}`,
      `*Address:* ${values.address}`,
      `*Preferred Course:* ${courseName}`,
      values.message ? `*Message:* ${values.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(siteConfig.whatsapp, msg), "_blank");
  };

  return (
    <>
      <PageHero
        title="Admission Enquiry"
        description="Submit your details and our team will guide you through counseling, demo class, and enrollment."
      />
      <section className="section-pad">
        <div className="container-premium max-w-3xl">
          <Breadcrumbs items={[{ label: "Admission" }]} />

          {siteConfig.admissionOpen ? (
            <p className="mb-6 rounded-xl border border-primary/20 bg-blue-soft px-4 py-3 text-sm text-primary">
              Admissions are open for 2026–27. {siteConfig.liveAdmissionCount} families enquired this
              month — limited batch seats available.
            </p>
          ) : null}

          <ol className="mb-10 grid gap-3 sm:grid-cols-5">
            {admissionSteps.map((s) => (
              <li
                key={s.step}
                className="rounded-xl border border-border bg-card p-3 text-center text-xs shadow-sm"
              >
                <span className="font-display text-lg font-bold text-accent">{s.step}</span>
                <p className="mt-1 font-semibold">{s.title}</p>
              </li>
            ))}
          </ol>

          <form
            className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="studentName">Student Name</Label>
                <Input id="studentName" className="mt-1" {...form.register("studentName")} />
                {form.formState.errors.studentName ? (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.studentName.message}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="fatherName">Father&apos;s Name</Label>
                <Input id="fatherName" className="mt-1" {...form.register("fatherName")} />
                {form.formState.errors.fatherName ? (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.fatherName.message}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="motherName">Mother&apos;s Name</Label>
                <Input id="motherName" className="mt-1" {...form.register("motherName")} />
                {form.formState.errors.motherName ? (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.motherName.message}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="classLabel">Class</Label>
                <Input
                  id="classLabel"
                  placeholder="e.g. Class 10"
                  className="mt-1"
                  {...form.register("classLabel")}
                />
                {form.formState.errors.classLabel ? (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.classLabel.message}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="school">School</Label>
                <Input id="school" className="mt-1" {...form.register("school")} />
                {form.formState.errors.school ? (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.school.message}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" className="mt-1" {...form.register("phone")} />
                {form.formState.errors.phone ? (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.phone.message}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" type="tel" className="mt-1" {...form.register("whatsapp")} />
                {form.formState.errors.whatsapp ? (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.whatsapp.message}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" className="mt-1" {...form.register("email")} />
                {form.formState.errors.email ? (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.email.message}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" className="mt-1" {...form.register("address")} />
                {form.formState.errors.address ? (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.address.message}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="preferredCourse">Preferred Course</Label>
                <select
                  id="preferredCourse"
                  className="mt-1 flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm"
                  {...form.register("preferredCourse")}
                >
                  <option value="">Select a course</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.slug}>
                      {c.name} ({c.classLabel})
                    </option>
                  ))}
                </select>
                {form.formState.errors.preferredCourse ? (
                  <p className="mt-1 text-xs text-destructive">
                    {form.formState.errors.preferredCourse.message}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea
                  id="message"
                  rows={4}
                  className="mt-1"
                  placeholder="Any questions about batches, fees, or demo class?"
                  {...form.register("message")}
                />
              </div>
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Submit via WhatsApp
            </Button>
            <p className="text-xs text-muted-foreground">
              By submitting, you agree to be contacted on WhatsApp/phone. See our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
