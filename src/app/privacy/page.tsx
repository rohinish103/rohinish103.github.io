import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Excellence Academy collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How Excellence Academy collects, uses, and protects your information."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/privacy/", label: "Privacy Policy" },
        ]}
      />
      <section className="section-pad">
        <article className="container-premium max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Last updated: March 1, 2026</p>
          <h2 className="font-display text-2xl font-semibold text-foreground">1. Introduction</h2>
          <p>
            Excellence Academy (&quot;we,&quot; &quot;us,&quot; or &quot;the Institute&quot;) operates a coaching institute in Beawar, Rajasthan. This Privacy Policy explains how we handle personal information when you visit our website, submit enquiry forms, enroll as a student, or communicate with us via phone, email, or WhatsApp.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">2. Information We Collect</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Contact & identity: student and parent names, class, school, phone numbers, email, and address.</li>
            <li>Academic information: course preferences, test scores, attendance, and performance reports.</li>
            <li>Technical data: browser type, device information, and usage data via standard analytics (when enabled).</li>
            <li>Communications: messages you send through forms, WhatsApp, or email.</li>
          </ul>
          <h2 className="font-display text-2xl font-semibold text-foreground">3. How We Use Information</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Process admission enquiries, counseling, and enrollment.</li>
            <li>Deliver classes, tests, study material, and parent updates.</li>
            <li>Manage fees, scholarships, and institute communications.</li>
            <li>Improve our website, services, and campus safety (including CCTV where posted).</li>
            <li>Comply with applicable laws and respond to lawful requests.</li>
          </ul>
          <h2 className="font-display text-2xl font-semibold text-foreground">4. Sharing of Information</h2>
          <p>
            We do not sell personal information. We may share data with trusted service providers (e.g., SMS, payment, or hosting partners) under confidentiality obligations, with parents/guardians as appropriate for minors, and when required by law or to protect rights and safety.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">5. Data Security & Retention</h2>
          <p>
            We implement reasonable administrative and technical safeguards. No method of transmission is 100% secure. We retain records for as long as needed for education, legal, and accounting purposes, then delete or anonymize where feasible.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">6. Children & Parents</h2>
          <p>
            Many of our students are minors. We collect student information with parental or guardian consent as part of admission. Parents may request access to or correction of their child&apos;s records by contacting us.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">7. Your Choices</h2>
          <p>
            You may opt out of non-essential marketing messages. You may request access, correction, or deletion of personal data subject to legal and contractual limits. Contact us using the details below.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">8. Contact</h2>
          <p>
            {site.name}
            <br />
            {site.address}
            <br />
            Email: {site.email}
            <br />
            Phone: {site.phoneDisplay}
          </p>
        </article>
      </section>
    </>
  );
}
