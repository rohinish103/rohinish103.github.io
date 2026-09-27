import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions, MobileBottomBar } from "@/components/layout/floating-actions";
import { LeadPopups } from "@/components/layout/lead-popups";
import { siteConfig } from "@/data/site";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Best Coaching Institute in Beawar`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Excellence Academy Beawar",
    "coaching institute Beawar",
    "Class 10 coaching Beawar",
    "JEE foundation Beawar",
    "NEET foundation Beawar",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <JsonLd />
          <Navbar />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <FloatingActions />
          <MobileBottomBar />
          <LeadPopups />
        </ThemeProvider>
      </body>
    </html>
  );
}
