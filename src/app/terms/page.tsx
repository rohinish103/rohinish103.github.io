import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Rules and expectations for students, parents, and visitors of Excellence Academy.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Rules and expectations for students, parents, and visitors of Excellence Academy."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/terms/", label: "Terms of Service" },
        ]}
      />
      <section className="section-pad">
        <article className="container-premium max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Last updated: March 1, 2026</p>
          <h2 className="font-display text-2xl font-semibold text-foreground">1. Agreement</h2>
          <p>
            By using our website, submitting forms, or enrolling in programs at Excellence Academy, you agree to these Terms. If you do not agree, please do not use our services.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">2. Services</h2>
          <p>
            We provide academic coaching, test series, study material, counseling, and related educational services. Course content, faculty assignments, timings, and batch sizes may change with reasonable notice to maintain quality.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">3. Admission & Fees</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Admission is subject to seat availability, eligibility, and completion of registration formalities.</li>
            <li>Fees are communicated at enrollment and must be paid as per the chosen plan (monthly, quarterly, or yearly).</li>
            <li>Fee refunds, if any, follow the institute&apos;s written refund policy shared at admission.</li>
            <li>Scholarships and discounts apply only when confirmed in writing by the institute.</li>
          </ul>
          <h2 className="font-display text-2xl font-semibold text-foreground">4. Student Conduct</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Maintain discipline, punctuality, and respect toward faculty, staff, and peers.</li>
            <li>Follow dress code and mobile/device rules posted on campus.</li>
            <li>Not share login credentials, test papers, or proprietary material without permission.</li>
            <li>Not engage in harassment, cheating, or behavior that disrupts learning or safety.</li>
          </ul>
          <p>We may suspend or terminate enrollment for serious or repeated violations.</p>
          <h2 className="font-display text-2xl font-semibold text-foreground">5. Intellectual Property</h2>
          <p>
            Website content, logos, notes, and teaching materials are owned by Excellence Academy or licensors. You may use materials only for personal study. Redistribution or commercial use is prohibited without written consent.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">6. Disclaimer</h2>
          <p>
            We strive for excellent outcomes but do not guarantee specific marks, ranks, or selection in competitive exams. Results depend on student effort, attendance, and external factors beyond our control.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Excellence Academy is not liable for indirect or consequential damages arising from use of the website or services. Our liability for any claim is limited to fees paid for the specific program giving rise to the claim in the preceding three months.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">8. Website Use</h2>
          <p>
            Enquiry forms and WhatsApp links are provided for convenience. Do not submit false information or attempt to disrupt the site. We may modify or discontinue website features without notice.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Courts in Rajasthan shall have jurisdiction, subject to applicable consumer protection laws.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground">10. Contact</h2>
          <p>
            Questions about these Terms: {site.email} · {site.phoneDisplay}
          </p>
        </article>
      </section>
    </>
  );
}
