import { business } from "@/config/business";

/**
 * Builds a wa.me deep link. Centralized so the number/URL format
 * only needs to be correct in one place.
 */
export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${business.whatsapp.number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const whatsAppMessages = {
  general: "Hello Tahi Home-Based Care, I'd like to find out more about your services.",
  appointment: "Hello Tahi Home-Based Care, I'd like to book an appointment.",
  service: (serviceName: string) =>
    `Hello Tahi Home-Based Care, I'd like to enquire about your ${serviceName} service.`,
};
