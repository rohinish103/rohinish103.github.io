import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}, Beawar.`,
};

export default function PrivacyPage() {
  const updated = "March 1, 2026";

  return (
    <>
      <PageHero title="Privacy Policy" description={`How ${siteConfig.name} collects, uses, and protects your information.`} />
      <section className="section-pad">
        <div className="container-premium max-w-3xl">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <p className="text-sm text-muted-foreground">Last updated: {updated}</p>

          <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-muted-foreground dark:prose-invert">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">1. Introduction</h2>
              <p>
                {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;the Institute&quot;) operates a coaching
                institute in {siteConfig.location}. This Privacy Policy explains how we handle personal information
                when you visit our website, submit enquiry forms, enroll as a student, or communicate with us via
                phone, email, or WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">2. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong className="text-foreground">Contact & identity:</strong> student and parent names, class,
                  school, phone numbers, email, and address.
                </li>
                <li>
                  <strong className="text-foreground">Academic information:</strong> course preferences, test scores,
                  attendance, and performance reports.
                </li>
                <li>
                  <strong className="text-foreground">Technical data:</strong> browser type, device information, and
                  usage data via standard analytics (when enabled).
                </li>
                <li>
                  <strong className="text-foreground">Communications:</strong> messages you send through forms,
                  WhatsApp, or email.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">3. How We Use Information</h2>
              <p>We use personal information to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Process admission enquiries, counseling, and enrollment.</li>
                <li>Deliver classes, tests, study material, and parent updates.</li>
                <li>Manage fees, scholarships, and institute communications.</li>
                <li>Improve our website, services, and campus safety (including CCTV where posted).</li>
                <li>Comply with applicable laws and respond to lawful requests.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">4. Sharing of Information</h2>
              <p>
                We do not sell personal information. We may share data with trusted service providers (e.g., SMS,
                payment, or hosting partners) under confidentiality obligations, with parents/guardians as
                appropriate for minors, and when required by law or to protect rights and safety.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">5. Data Security & Retention</h2>
              <p>
                We implement reasonable administrative and technical safeguards. No method of transmission is 100%
                secure. We retain records for as long as needed for education, legal, and accounting purposes, then
                delete or anonymize where feasible.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">6. Children & Parents</h2>
              <p>
                Many of our students are minors. We collect student information with parental or guardian consent
                as part of admission. Parents may request access to or correction of their child&apos;s records by
                contacting us.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">7. Your Choices</h2>
              <p>
                You may opt out of non-essential marketing messages. You may request access, correction, or deletion
                of personal data subject to legal and contractual limits. Contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">8. Contact</h2>
              <p>
                {siteConfig.name}
                <br />
                {siteConfig.address}
                <br />
                Email:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>
                <br />
                Phone: {siteConfig.phone}
              </p>
              <p>
                See also our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
