import { DemoBookingForm } from "@/components/forms";

const points = [
  "No obligation · Limited weekly slots",
  "Subject expert demo for your class",
  "Counseling on course & batch fit",
];

export function DemoBooking() {
  return (
    <section id="demo" className="section-tinted scroll-mt-20">
      <div className="section container-page grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Try Before You Enroll</p>
          <h2 className="heading mt-2 text-3xl sm:text-4xl">
            Book a Free Demo Class
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Pick a date and time. Experience our classroom energy, teaching style,
            and mentorship.
          </p>
          <ul className="mt-5 space-y-1.5 text-xs text-muted-foreground">
            {points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>
        <DemoBookingForm />
      </div>
    </section>
  );
}
