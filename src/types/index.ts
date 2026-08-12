export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceSubcategory {
  name: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  subcategories: ServiceSubcategory[];
  /** Path relative to /public, or undefined while awaiting client photography. */
  image?: string;
  imageAlt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  /** Path relative to /public, or undefined while awaiting client photography. */
  photo?: string;
  isPlaceholder: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  quote: string;
  context?: string;
  photo?: string;
  isPlaceholder: boolean;
}

export interface SocialLink {
  platform: "Facebook" | "Instagram" | "TikTok" | "LinkedIn" | "YouTube";
  url: string | null;
  isPlaceholder: boolean;
}

export interface PageSeo {
  title: string;
  description: string;
  path: string;
}

export type AppointmentSubmissionStatus = "idle" | "submitting" | "success" | "error";

export interface AppointmentFormValues {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface ContactFormValues {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
