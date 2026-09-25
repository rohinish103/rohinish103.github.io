import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Excellence Academy | Best Coaching Institute in Beawar",
    template: "%s | Excellence Academy",
  },
  description: site.description,
  keywords: [
    "Excellence Academy Beawar",
    "coaching institute Beawar",
    "Class 10 coaching Beawar",
    "JEE foundation Beawar",
    "NEET foundation Beawar",
  ],
  openGraph: {
    title: "Excellence Academy — Building Bright Futures Through Quality Education",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        description: site.description,
        telephone: site.phoneDisplay,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressLocality: "Beawar",
          addressRegion: "Rajasthan",
          postalCode: "305901",
          addressCountry: "IN",
        },
        sameAs: Object.values(site.social),
      },
      {
        "@type": "LocalBusiness",
        name: site.name,
        image: `${site.url}/og.svg`,
        telephone: site.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressLocality: "Beawar",
          addressRegion: "Rajasthan",
          postalCode: "305901",
          addressCountry: "IN",
        },
        url: site.url,
        priceRange: "₹₹",
      },
    ],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>
          <Header />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <FloatingActions />
        </Providers>
      </body>
    </html>
  );
}
