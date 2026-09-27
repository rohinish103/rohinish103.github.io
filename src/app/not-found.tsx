import Link from "next/link";
import { PageHero } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page Not Found"
        description="The page you are looking for may have moved or does not exist."
      />
      <section className="section-pad">
        <div className="container-premium flex flex-col items-center text-center">
          <p className="font-display text-8xl font-bold text-primary/20">404</p>
          <p className="mt-4 max-w-md text-muted-foreground">
            Check the URL or return to the homepage to explore courses, admission, and downloads.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
            <Link href="/admission">
              <Button variant="outline">Admission Enquiry</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
