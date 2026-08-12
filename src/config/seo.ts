import type { PageSeo } from "@/types";

export const siteUrl = "https://tahihomebasedcare.com";

export const seoDefaults: Record<string, PageSeo> = {
  home: {
    title: "Tahi Home-Based Care | Compassionate Home Healthcare in Kenya",
    description:
      "Tahi Home-Based Care provides professional, compassionate home-based healthcare services including nursing care, physiotherapy, nutrition, laboratory services, doctor appointments, palliative care and counseling.",
    path: "/",
  },
  services: {
    title: "Our Services | Tahi Home-Based Care",
    description:
      "Explore Tahi Home-Based Care's healthcare services: nursing care, physiotherapy, nutrition, laboratory services, doctor appointments, palliative care and counseling — delivered at home.",
    path: "/services",
  },
  about: {
    title: "About Us | Tahi Home-Based Care",
    description:
      "Learn about Tahi Home-Based Care's approach to compassionate, professional home-based healthcare and the team behind it.",
    path: "/about",
  },
  testimonials: {
    title: "Testimonials | Tahi Home-Based Care",
    description: "Read what clients say about their experience with Tahi Home-Based Care.",
    path: "/testimonials",
  },
  appointment: {
    title: "Book an Appointment | Tahi Home-Based Care",
    description:
      "Request a home-based care appointment or consultation with Tahi Home-Based Care. Fill out the form or reach us directly on WhatsApp.",
    path: "/appointment",
  },
  contact: {
    title: "Contact Us | Tahi Home-Based Care",
    description: "Get in touch with Tahi Home-Based Care by WhatsApp, phone, or our contact form.",
    path: "/contact",
  },
  terms: {
    title: "Terms of Service | Tahi Home-Based Care",
    description: "The terms and conditions governing use of the Tahi Home-Based Care website and services.",
    path: "/terms-of-service",
  },
  privacy: {
    title: "Privacy Policy | Tahi Home-Based Care",
    description: "How Tahi Home-Based Care collects, uses and protects your personal and health-related information.",
    path: "/privacy-policy",
  },
  accessibility: {
    title: "Accessibility Statement | Tahi Home-Based Care",
    description: "Tahi Home-Based Care's commitment to a website that is accessible to all users.",
    path: "/accessibility-statement",
  },
  cookies: {
    title: "Cookie Policy | Tahi Home-Based Care",
    description: "How Tahi Home-Based Care uses cookies and similar technologies on this website.",
    path: "/cookie-policy",
  },
  notFound: {
    title: "Page Not Found | Tahi Home-Based Care",
    description: "The page you were looking for could not be found.",
    path: "/404",
  },
};
