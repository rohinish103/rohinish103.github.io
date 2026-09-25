"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { site, whatsappUrl } from "@/data/site";
import { admissionCourseOptions } from "@/data/courses";

function sendToWhatsApp(lines: Array<[string, string]>, heading: string) {
  const body = lines
    .filter(([, value]) => value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
  window.open(whatsappUrl(`${heading}\n${body}`), "_blank", "noopener");
}

export function DemoBookingForm() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "10:00" });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendToWhatsApp(
          [
            ["Student", form.name],
            ["Phone", form.phone],
            ["Preferred date", form.date],
            ["Preferred time", form.time],
          ],
          "*Free demo class request*",
        );
      }}
      className="card space-y-4 p-5 sm:p-6"
    >
      <div>
        <label className="field-label" htmlFor="demo-name">
          Student Name
        </label>
        <input
          id="demo-name"
          required
          className="field"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
      </div>
      <div>
        <label className="field-label" htmlFor="demo-phone">
          Phone / WhatsApp
        </label>
        <input
          id="demo-phone"
          required
          type="tel"
          className="field"
          value={form.phone}
          onChange={(event) => setForm({ ...form, phone: event.target.value })}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="demo-date">
            Preferred Date
          </label>
          <input
            id="demo-date"
            required
            type="date"
            className="field"
            value={form.date}
            onChange={(event) => setForm({ ...form, date: event.target.value })}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="demo-time">
            Preferred Time
          </label>
          <input
            id="demo-time"
            required
            type="time"
            className="field"
            value={form.time}
            onChange={(event) => setForm({ ...form, time: event.target.value })}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-gold w-full rounded-lg">
        Confirm Demo Booking
      </button>
    </form>
  );
}

const emptyAdmission = {
  student: "",
  father: "",
  mother: "",
  className: "",
  school: "",
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  course: "",
  message: "",
};

export function AdmissionForm() {
  const [form, setForm] = useState(emptyAdmission);
  const update = (key: keyof typeof emptyAdmission) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm({ ...form, [key]: event.target.value });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendToWhatsApp(
          [
            ["Student", form.student],
            ["Father", form.father],
            ["Mother", form.mother],
            ["Class", form.className],
            ["School", form.school],
            ["Phone", form.phone],
            ["WhatsApp", form.whatsapp],
            ["Email", form.email],
            ["Address", form.address],
            ["Preferred course", form.course],
            ["Message", form.message],
          ],
          "*Admission enquiry*",
        );
      }}
      className="card space-y-4 p-5 sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="ad-student">
            Student Name
          </label>
          <input id="ad-student" required className="field" value={form.student} onChange={update("student")} />
        </div>
        <div>
          <label className="field-label" htmlFor="ad-father">
            Father&apos;s Name
          </label>
          <input id="ad-father" className="field" value={form.father} onChange={update("father")} />
        </div>
        <div>
          <label className="field-label" htmlFor="ad-mother">
            Mother&apos;s Name
          </label>
          <input id="ad-mother" className="field" value={form.mother} onChange={update("mother")} />
        </div>
        <div>
          <label className="field-label" htmlFor="ad-class">
            Class
          </label>
          <input id="ad-class" className="field" value={form.className} onChange={update("className")} />
        </div>
        <div>
          <label className="field-label" htmlFor="ad-school">
            School
          </label>
          <input id="ad-school" className="field" value={form.school} onChange={update("school")} />
        </div>
        <div>
          <label className="field-label" htmlFor="ad-phone">
            Phone
          </label>
          <input id="ad-phone" required type="tel" className="field" value={form.phone} onChange={update("phone")} />
        </div>
        <div>
          <label className="field-label" htmlFor="ad-whatsapp">
            WhatsApp
          </label>
          <input id="ad-whatsapp" type="tel" className="field" value={form.whatsapp} onChange={update("whatsapp")} />
        </div>
        <div>
          <label className="field-label" htmlFor="ad-email">
            Email
          </label>
          <input id="ad-email" type="email" className="field" value={form.email} onChange={update("email")} />
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="ad-address">
          Address
        </label>
        <input id="ad-address" className="field" value={form.address} onChange={update("address")} />
      </div>

      <div>
        <label className="field-label" htmlFor="ad-course">
          Preferred Course
        </label>
        <select id="ad-course" required className="field" value={form.course} onChange={update("course")}>
          <option value="">Select a course</option>
          {admissionCourseOptions.map((option) => (
            <option key={option.label} value={`${option.label} (${option.level})`}>
              {option.label} ({option.level})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="field-label" htmlFor="ad-message">
          Message (optional)
        </label>
        <textarea id="ad-message" rows={3} className="field" value={form.message} onChange={update("message")} />
      </div>

      <button type="submit" className="btn btn-primary w-full rounded-lg">
        <Send className="size-4" />
        Submit via WhatsApp
      </button>
      <p className="text-xs text-muted-foreground">
        By submitting, you agree to be contacted on WhatsApp/phone. See our{" "}
        <Link href="/privacy" className="text-primary underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}

export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendToWhatsApp(
          [
            ["Name", form.name],
            ["Phone", form.phone],
            ["Email", form.email],
            ["Message", form.message],
          ],
          "*Website enquiry*",
        );
      }}
      className="space-y-4"
    >
      <div>
        <label className="field-label" htmlFor="c-name">
          Your name
        </label>
        <input
          id="c-name"
          required
          className="field"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="c-phone">
            Phone
          </label>
          <input
            id="c-phone"
            required
            type="tel"
            className="field"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="c-email">
            Email (optional)
          </label>
          <input
            id="c-email"
            type="email"
            className="field"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="field-label" htmlFor="c-message">
          Message
        </label>
        <textarea
          id="c-message"
          rows={4}
          required
          className="field"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary w-full rounded-lg">
        <Send className="size-4" />
        Send via WhatsApp
      </button>
    </form>
  );
}

export function CounselingForm() {
  const [form, setForm] = useState({ name: "", className: "", phone: "", date: "", goals: "" });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendToWhatsApp(
          [
            ["Student", form.name],
            ["Class", form.className],
            ["Phone", form.phone],
            ["Preferred date", form.date],
            ["Goals", form.goals],
          ],
          "*Career counseling request*",
        );
      }}
      className="card space-y-4 p-5 sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="cc-name">
            Student Name
          </label>
          <input
            id="cc-name"
            required
            className="field"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="cc-class">
            Class
          </label>
          <input
            id="cc-class"
            className="field"
            value={form.className}
            onChange={(event) => setForm({ ...form, className: event.target.value })}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="cc-phone">
            Phone / WhatsApp
          </label>
          <input
            id="cc-phone"
            required
            type="tel"
            className="field"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="cc-date">
            Preferred Date
          </label>
          <input
            id="cc-date"
            type="date"
            className="field"
            value={form.date}
            onChange={(event) => setForm({ ...form, date: event.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="field-label" htmlFor="cc-goals">
          Your goals or questions
        </label>
        <textarea
          id="cc-goals"
          rows={3}
          className="field"
          value={form.goals}
          onChange={(event) => setForm({ ...form, goals: event.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary w-full rounded-lg">
        Request via WhatsApp
      </button>
    </form>
  );
}

const SAMPLE_ATTENDANCE: Record<string, { name: string; batch: string; present: number; total: number }> = {
  EA2024001: { name: "Ananya Sharma", batch: "Class 10 Board Elite", present: 112, total: 120 },
  EA2024012: { name: "Rohan Verma", batch: "Class 12 Science Intensive", present: 104, total: 118 },
};

export function AttendanceLookup() {
  const [id, setId] = useState("");
  const [record, setRecord] = useState<(typeof SAMPLE_ATTENDANCE)[string] | null>(null);
  const [notFound, setNotFound] = useState(false);

  return (
    <div className="space-y-4">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const found = SAMPLE_ATTENDANCE[id.trim().toUpperCase()] ?? null;
          setRecord(found);
          setNotFound(!found);
        }}
        className="flex flex-col gap-3 sm:flex-row sm:items-end"
      >
        <div className="flex-1">
          <label className="field-label" htmlFor="att-id">
            Student ID
          </label>
          <input
            id="att-id"
            required
            className="field"
            placeholder="EA2024001"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary rounded-lg sm:w-32">
          Search
        </button>
      </form>

      {record ? (
        <div className="card p-5">
          <p className="font-display text-lg font-semibold">{record.name}</p>
          <p className="text-sm text-muted-foreground">{record.batch}</p>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${Math.round((record.present / record.total) * 100)}%` }}
            />
          </div>
          <p className="mt-2 text-sm">
            <span className="font-semibold text-primary">
              {Math.round((record.present / record.total) * 100)}%
            </span>{" "}
            attendance · {record.present}/{record.total} classes
          </p>
        </div>
      ) : null}

      {notFound ? (
        <p className="text-sm text-muted-foreground">
          No demo record for that ID. Try EA2024001 or EA2024012.
        </p>
      ) : null}
    </div>
  );
}

export function ParentLoginForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="card space-y-4 p-5 sm:p-6"
    >
      <div>
        <label className="field-label" htmlFor="pl-phone">
          Registered Mobile Number
        </label>
        <input id="pl-phone" required type="tel" className="field" />
      </div>
      <div>
        <label className="field-label" htmlFor="pl-otp">
          OTP
        </label>
        <input id="pl-otp" inputMode="numeric" className="field" placeholder="••••" />
      </div>
      <button type="submit" className="btn btn-primary w-full rounded-lg">
        Verify &amp; Sign In
      </button>
      <p className="text-xs text-muted-foreground">
        {sent
          ? "Preview UI only — no OTP is sent. "
          : "Preview UI only. "}
        <Link href="/contact" className="text-primary underline">
          Contact us
        </Link>{" "}
        for report requests, or call {site.phone}.
      </p>
    </form>
  );
}
