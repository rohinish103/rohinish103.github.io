import { siteConfig } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address,
          addressLocality: "Beawar",
          addressRegion: "Rajasthan",
          postalCode: "305901",
          addressCountry: "IN",
        },
        sameAs: Object.values(siteConfig.social),
      },
      {
        "@type": "LocalBusiness",
        name: siteConfig.name,
        image: `${siteConfig.url}/og.svg`,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address,
          addressLocality: "Beawar",
          addressRegion: "Rajasthan",
          postalCode: "305901",
          addressCountry: "IN",
        },
        url: siteConfig.url,
        priceRange: "₹₹",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
