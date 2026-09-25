import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-premium max-w-xl py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page you are looking for has moved or does not exist.</p>
        <Button href="/" variant="accent" className="mt-6">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
