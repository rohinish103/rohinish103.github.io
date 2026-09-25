import Link from "next/link";
import { GraduationCap, MessageCircle, Navigation, Phone } from "lucide-react";
import { mapsDirectionsUrl, site, whatsappUrl } from "@/data/site";

const actions = [
  {
    label: "WhatsApp",
    href: whatsappUrl(
      `Hello ${site.name}, I would like to know more about your courses.`,
    ),
    Icon: MessageCircle,
    className: "bg-emerald-500 hover:bg-emerald-600 text-white",
    external: true,
  },
  {
    label: "Call",
    href: site.phoneHref,
    Icon: Phone,
    className: "bg-[#0b4f9c] hover:bg-[#0a4585] text-white",
  },
  {
    label: "Directions",
    href: mapsDirectionsUrl,
    Icon: Navigation,
    className: "bg-gold hover:brightness-95 text-[#1a1405]",
    external: true,
  },
];

export function FloatingActions() {
  return (
    <div className="fixed right-3 bottom-4 z-40 flex flex-col gap-2 sm:right-5 sm:bottom-6">
      {actions.map(({ label, href, Icon, className, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          className={`grid size-11 place-items-center rounded-full shadow-lg transition ${className}`}
        >
          <Icon className="size-5" />
        </a>
      ))}
      <Link
        href="/admission"
        aria-label="Admission"
        title="Admission"
        className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:brightness-110"
      >
        <GraduationCap className="size-5" />
      </Link>
    </div>
  );
}
