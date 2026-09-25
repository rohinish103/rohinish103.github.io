import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container-page grid min-h-[60vh] place-items-center text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="heading mt-2 text-4xl">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you are looking for has moved or never existed.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary px-6">
            Back to Home
          </Link>
          <Link href="/contact" className="btn btn-outline px-6">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
