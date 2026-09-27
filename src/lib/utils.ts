import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneDisplay(phone: string) {
  return phone.replace(/(\+91)(\d{5})(\d{5})/, "$1 $2 $3");
}

export function whatsappLink(phone: string, message?: string) {
  const digits = phone.replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}
