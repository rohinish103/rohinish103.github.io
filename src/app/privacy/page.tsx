import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects and uses the information you share with us.`,
};

const sections = [
  {
    heading: "Information we collect",
    body: "We collect the details you submit through admission, demo booking, counseling, and contact forms — typically student name, class, parent name, phone or WhatsApp number, email, and any message you write.",
  },
  {
    heading: "How we use it",
    body: "Your details are used only to respond to your enquiry, arrange counseling or demo classes, share batch and fee information, and send academic updates you have asked for.",
  },
  {
    heading: "WhatsApp and phone contact",
    body: "Our website forms open WhatsApp with your message pre-filled; sending it is your choice. By contacting us you agree to be reached on the number you provide.",
  },
  {
    heading: "Sharing",
    body: "We do not sell or rent your information. Details are shared internally with counselors and faculty only as needed to support your admission or academic progress.",
  },
  {
    heading: "Data retention and removal",
    body: `Enquiry records are retained while they remain useful for admissions and academic support. Write to ${site.email} to request correction or deletion of your details.`,
  },
  {
    heading: "Cookies and analytics",
    body: "This website stores only your theme preference in local storage. If analytics are added later, this policy will be updated before collection begins.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description={`How ${site.name} handles the information families share with us.`}
        crumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="section container-page max-w-3xl space-y-6">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="heading text-lg">{section.heading}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{section.body}</p>
          </div>
        ))}
        <p className="text-xs text-muted-foreground">
          Questions about this policy? Call {site.phone} or email {site.email}.
        </p>
      </section>
    </>
  );
}
