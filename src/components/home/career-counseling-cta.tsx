import Link from "next/link";

export function CareerCounselingCta() {
  return (
    <section className="container-page py-12">
      <div className="section-tinted rounded-2xl border border-border px-6 py-12 text-center">
        <p className="eyebrow">Guidance</p>
        <h2 className="heading mt-2 text-3xl sm:text-4xl">Career Counseling</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Stream selection, entrance pathways, and long-term academic planning with
          experienced counselors.
        </p>
        <Link href="/career-counseling" className="btn btn-gold mt-6 px-6">
          Book Counseling Session
        </Link>
      </div>
    </section>
  );
}
