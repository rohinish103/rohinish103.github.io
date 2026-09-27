import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/shared/section-header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}, Beawar.`,
};

export default function TermsPage() {
  const updated = "March 1, 2026";

  return (
    <>
      <PageHero
        title="Terms of Service"
        description={`Rules and expectations for students, parents, and visitors of ${siteConfig.name}.`}
      />
      <section className="section-pad">
        <div className="container-premium max-w-3xl">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />
          <p className="text-sm text-muted-foreground">Last updated: {updated}</p>

          <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-muted-foreground dark:prose-invert">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">1. Agreement</h2>
              <p>
                By using our website, submitting forms, or enrolling in programs at {siteConfig.name}, you agree to
                these Terms. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">2. Services</h2>
              <p>
                We provide academic coaching, test series, study material, counseling, and related educational
                services. Course content, faculty assignments, timings, and batch sizes may change with reasonable
                notice to maintain quality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">3. Admission & Fees</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Admission is subject to seat availability, eligibility, and completion of registration formalities.</li>
                <li>Fees are communicated at enrollment and must be paid as per the chosen plan (monthly, quarterly, or yearly).</li>
                <li>Fee refunds, if any, follow the institute&apos;s written refund policy shared at admission.</li>
                <li>Scholarships and discounts apply only when confirmed in writing by the institute.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">4. Student Conduct</h2>
              <p>Students and visitors must:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Maintain discipline, punctuality, and respect toward faculty, staff, and peers.</li>
                <li>Follow dress code and mobile/device rules posted on campus.</li>
                <li>Not share login credentials, test papers, or proprietary material without permission.</li>
                <li>Not engage in harassment, cheating, or behavior that disrupts learning or safety.</li>
              </ul>
              <p>We may suspend or terminate enrollment for serious or repeated violations.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">5. Intellectual Property</h2>
              <p>
                Website content, logos, notes, and teaching materials are owned by {siteConfig.name} or licensors.
                You may use materials only for personal study. Redistribution or commercial use is prohibited without
                written consent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">6. Disclaimer</h2>
              <p>
                We strive for excellent outcomes but do not guarantee specific marks, ranks, or selection in
                competitive exams. Results depend on student effort, attendance, and external factors beyond our
                control.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {siteConfig.name} is not liable for indirect or consequential
                damages arising from use of the website or services. Our liability for any claim is limited to fees
                paid for the specific program giving rise to the claim in the preceding three months.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">8. Website Use</h2>
              <p>
                Enquiry forms and WhatsApp links are provided for convenience. Do not submit false information or
                attempt to disrupt the site. We may modify or discontinue website features without notice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">9. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Courts in Rajasthan shall have jurisdiction, subject
                to applicable consumer protection laws.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">10. Contact</h2>
              <p>
                Questions about these Terms: {siteConfig.email} · {siteConfig.phone}
              </p>
              <p>
                Read our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
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
