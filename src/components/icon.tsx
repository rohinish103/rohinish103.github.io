import {
  Armchair,
  Award,
  BookOpen,
  Camera,
  ChartNoAxesColumn,
  CircleHelp,
  CircleParking,
  ClipboardCheck,
  Compass,
  Droplet,
  Files,
  GraduationCap,
  Heart,
  IndianRupee,
  Laptop,
  Monitor,
  Projector,
  Snowflake,
  UsersRound,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  armchair: Armchair,
  award: Award,
  book: BookOpen,
  camera: Camera,
  chart: ChartNoAxesColumn,
  clipboard: ClipboardCheck,
  compass: Compass,
  droplet: Droplet,
  files: Files,
  graduation: GraduationCap,
  heart: Heart,
  help: CircleHelp,
  laptop: Laptop,
  monitor: Monitor,
  parents: UsersRound,
  parking: CircleParking,
  projector: Projector,
  rupee: IndianRupee,
  snow: Snowflake,
  users: Users,
  wifi: Wifi,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = icons[name] ?? GraduationCap;
  return <Component className={className} aria-hidden />;
}
