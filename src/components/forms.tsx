"use client";

import { courses } from "@/data/courses";
import { whatsappUrl } from "@/data/site";
import { Button, Field } from "@/components/ui";

function openWhatsApp(message: string) {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

export function DemoForm() {
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        openWhatsApp(
          `Hi! I want to book a free demo class.\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nDate: ${data.get("date")}\nTime: ${data.get("time")}`,
        );
      }}
    >
      <Field label="Student Name" name="name" required />
      <Field label="Phone / WhatsApp" name="phone" required />
      <Field label="Preferred Date" name="date" type="date" required />
      <Field label="Preferred Time" name="time" type="time" required />
      <Button type="submit" variant="accent" className="w-full">
        Confirm Demo Booking
      </Button>
    </form>
  );
}

export function AdmissionForm() {
  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        openWhatsApp(
          `Admission enquiry\nStudent: ${data.get("student")}\nClass: ${data.get("class")}\nCourse: ${data.get("course")}\nPhone: ${data.get("phone")}\nSchool: ${data.get("school")}\nMessage: ${data.get("message") || "—"}`,
        );
      }}
    >
      <Field label="Student Name" name="student" required />
      <Field label="Father's Name" name="father" required />
      <Field label="Mother's Name" name="mother" />
      <Field label="Class" name="class" required />
      <Field label="School" name="school" />
      <Field label="Phone" name="phone" required />
      <Field label="WhatsApp" name="whatsapp" required />
      <Field label="Email" name="email" type="email" />
      <div className="sm:col-span-2">
        <Field label="Address" name="address" />
      </div>
      <label className="block space-y-1.5 text-sm sm:col-span-2">
        <span className="font-medium">Preferred Course</span>
        <select
          name="course"
          required
          className="h-11 w-full rounded-xl border border-input bg-background px-3 outline-none ring-ring focus-visible:ring-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select a course
          </option>
          {courses.map((course) => (
            <option key={course.slug} value={course.name}>
              {course.name} ({course.classLabel})
            </option>
          ))}
        </select>
      </label>
      <label className="block space-y-1.5 text-sm sm:col-span-2">
        <span className="font-medium">Message (optional)</span>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-xl border border-input bg-background px-3 py-2 outline-none ring-ring focus-visible:ring-2"
        />
      </label>
      <div className="sm:col-span-2">
        <Button type="submit" variant="accent" className="w-full">
          Submit via WhatsApp
        </Button>
        <p className="mt-2 text-xs text-muted-foreground">
          By submitting, you agree to be contacted on WhatsApp/phone. See our Privacy Policy.
        </p>
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        openWhatsApp(
          `Contact request from ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email") || "—"}\n${data.get("message")}`,
        );
      }}
    >
      <Field label="Your name" name="name" required />
      <Field label="Phone" name="phone" required />
      <Field label="Email (optional)" name="email" type="email" />
      <label className="block space-y-1.5 text-sm">
        <span className="font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full rounded-xl border border-input bg-background px-3 py-2 outline-none ring-ring focus-visible:ring-2"
        />
      </label>
      <Button type="submit" variant="accent" className="w-full">
        Send via WhatsApp
      </Button>
    </form>
  );
}

export function CounselingForm() {
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        openWhatsApp(
          `Career counseling request\nName: ${data.get("name")}\nClass: ${data.get("class")}\nPhone: ${data.get("phone")}\nDate: ${data.get("date")}\nGoals: ${data.get("goals")}`,
        );
      }}
    >
      <Field label="Student Name" name="name" required />
      <Field label="Class" name="class" required />
      <Field label="Phone / WhatsApp" name="phone" required />
      <Field label="Preferred Date" name="date" type="date" required />
      <label className="block space-y-1.5 text-sm">
        <span className="font-medium">Your goals or questions</span>
        <textarea
          name="goals"
          required
          rows={4}
          className="w-full rounded-xl border border-input bg-background px-3 py-2 outline-none ring-ring focus-visible:ring-2"
        />
      </label>
      <Button type="submit" variant="accent" className="w-full">
        Request via WhatsApp
      </Button>
    </form>
  );
}
