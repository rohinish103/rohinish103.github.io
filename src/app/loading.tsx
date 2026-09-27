import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <div className="border-b border-border bg-gradient-to-br from-blue-soft via-background to-gold-soft/40">
        <div className="container-premium section-pad !py-12 md:!py-16">
          <Skeleton className="h-10 w-2/3 max-w-md" />
          <Skeleton className="mt-4 h-5 w-full max-w-xl" />
        </div>
      </div>
      <section className="section-pad">
        <div className="container-premium space-y-6">
          <Skeleton className="h-4 w-48" />
          <div className="grid gap-4 md:grid-cols-3">
            <Skeleton className="h-48 rounded-2xl" />
            <Skeleton className="h-48 rounded-2xl" />
            <Skeleton className="h-48 rounded-2xl" />
          </div>
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      </section>
    </div>
  );
}
