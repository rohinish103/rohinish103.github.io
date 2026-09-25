import { Hero } from "@/components/home/hero";
import {
  NoticeMarquee,
  QuoteBanner,
  StatsStrip,
} from "@/components/home/highlights";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CoursesPreview } from "@/components/home/courses-preview";
import {
  ResultsPreview,
  TopperSpotlight,
} from "@/components/home/results-preview";
import { FacultyPreview } from "@/components/home/faculty-preview";
import { DemoBooking } from "@/components/home/demo-booking";
import { BatchesPreview } from "@/components/home/batches-preview";
import { Facilities } from "@/components/home/facilities";
import { AdmissionJourney } from "@/components/home/admission-journey";
import { ScholarshipsPreview } from "@/components/home/scholarships-preview";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { EventsAndNotices } from "@/components/home/events-notices";
import { PerformanceTracking } from "@/components/home/performance-tracking";
import { CareerCounselingCta } from "@/components/home/career-counseling-cta";
import { BlogPreview } from "@/components/home/blog-preview";
import { FaqPreview } from "@/components/home/faq-preview";
import { ContactPreview } from "@/components/home/contact-preview";
import { SocialFeed } from "@/components/home/social-feed";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <NoticeMarquee />
      <QuoteBanner />
      <WhyChooseUs />
      <CoursesPreview />
      <TopperSpotlight />
      <ResultsPreview />
      <FacultyPreview />
      <DemoBooking />
      <BatchesPreview />
      <Facilities />
      <AdmissionJourney />
      <ScholarshipsPreview />
      <TestimonialsPreview />
      <GalleryPreview />
      <EventsAndNotices />
      <PerformanceTracking />
      <CareerCounselingCta />
      <BlogPreview />
      <FaqPreview />
      <ContactPreview />
      <SocialFeed />
    </>
  );
}
