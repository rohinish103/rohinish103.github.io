export const site = {
  name: "Excellence Academy",
  shortName: "EA",
  tagline: "Building Bright Futures Through Quality Education",
  description:
    "Helping students achieve academic excellence with experienced faculty, structured learning, regular tests, and personal mentorship.",
  url: "https://excellenceacademybeawar.com",
  city: "Beawar, Rajasthan",
  address: "Near Bus Stand, Station Road, Beawar, Rajasthan 305901",
  mapsQuery: "Excellence Academy Beawar",
  phoneDisplay: "+91 98765 43210",
  phoneTel: "+919876543210",
  email: "info@excellenceacademybeawar.com",
  whatsappText: "Hi! I want to know about admissions.",
  hours: {
    weekday: "Monday – Saturday: 7:00 AM – 8:00 PM",
    sunday: "Sunday: 8:00 AM – 1:00 PM (Special batches)",
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    twitter: "https://twitter.com/",
  },
  googleReviews: { rating: 4.9, count: 186 },
  heroImage:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop",
  portraitImage:
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=1000&fit=crop",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/courses/", label: "Courses" },
  { href: "/results/", label: "Results" },
  { href: "/faculty/", label: "Faculty" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/testimonials/", label: "Testimonials" },
  { href: "/blog/", label: "Blog" },
  { href: "/faqs/", label: "FAQs" },
  { href: "/contact/", label: "Contact" },
] as const;

export const footerQuickLinks = [
  { href: "/about/", label: "About Us" },
  { href: "/admission/", label: "Admission" },
  { href: "/fees/", label: "Fee Structure" },
  { href: "/scholarship/", label: "Scholarships" },
  { href: "/batches/", label: "Batches" },
  { href: "/download-center/", label: "Download Center" },
] as const;

export const footerCourseLinks = [
  { href: "/courses/?category=school", label: "Class 6–8" },
  { href: "/courses/?category=school", label: "Class 9–10" },
  { href: "/courses/?category=school", label: "Class 11–12 Science" },
  { href: "/courses/jee-foundation/", label: "JEE Foundation" },
  { href: "/courses/neet-foundation/", label: "NEET Foundation" },
  { href: "/courses/olympiad-preparation/", label: "Olympiad" },
] as const;

export function whatsappUrl(text = site.whatsappText) {
  return `https://wa.me/${site.phoneTel.replace("+", "")}?text=${encodeURIComponent(text)}`;
}

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
}
