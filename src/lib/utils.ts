export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function initials(name: string) {
  return name
    .replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function formatDate(iso: string, withWeekday = false) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    weekday: withWeekday ? "short" : undefined,
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatShortDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
