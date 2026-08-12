/**
 * CENTRAL BUSINESS CONFIGURATION
 * ------------------------------------------------------------
 * Single source of truth for facts about Tahi Home-Based Care.
 * Fields marked `isPlaceholder: true` (or with a PLACEHOLDER_
 * prefixed value) are awaiting real information from the client
 * and are rendered with a visible "coming soon" treatment —
 * never presented to visitors as confirmed fact.
 *
 * When the client provides real information, update ONLY this
 * file. No component should ever hardcode business facts.
 */

export const business = {
  name: "Tahi Home-Based Care",
  legalName: "Tahi Home-Based Care",
  tagline: "PLACEHOLDER_TAGLINE",
  taglineIsPlaceholder: true,
  domain: "https://tahihomebasedcare.com",

  whatsapp: {
    /** E.164, no plus, no spaces — required format for wa.me links. */
    number: "254117995229",
    displayNumber: "+254 117 995 229",
  },

  email: {
    value: null as string | null,
    isPlaceholder: true,
  },

  phone: {
    value: null as string | null,
    isPlaceholder: true,
  },

  address: {
    line: null as string | null,
    city: "Nairobi",
    country: "Kenya",
    isPlaceholder: true,
  },

  hours: {
    summary: "PLACEHOLDER_HOURS",
    isPlaceholder: true,
  },

  description: {
    short:
      "Tahi Home-Based Care brings professional, compassionate healthcare services directly to clients in the comfort of their own homes. [Company description awaiting client input.]",
    isPlaceholder: true,
  },

  vision: {
    value: "PLACEHOLDER_VISION",
    isPlaceholder: true,
  },

  mission: {
    value: "PLACEHOLDER_MISSION",
    isPlaceholder: true,
  },

  coreValues: {
    items: [
      { title: "PLACEHOLDER_VALUE_1", description: "PLACEHOLDER_VALUE_1_DESCRIPTION" },
      { title: "PLACEHOLDER_VALUE_2", description: "PLACEHOLDER_VALUE_2_DESCRIPTION" },
      { title: "PLACEHOLDER_VALUE_3", description: "PLACEHOLDER_VALUE_3_DESCRIPTION" },
      { title: "PLACEHOLDER_VALUE_4", description: "PLACEHOLDER_VALUE_4_DESCRIPTION" },
    ],
    isPlaceholder: true,
  },

  whyChooseUs: {
    items: [
      {
        title: "Care where you're most comfortable",
        description:
          "Our team brings clinical support to your home, reducing the stress and disruption of hospital visits.",
      },
      {
        title: "A team-based approach",
        description:
          "Services are coordinated across nursing, therapy and wellness disciplines so care stays consistent.",
      },
      {
        title: "Responsive communication",
        description:
          "Reach us directly by phone or WhatsApp to ask questions or arrange a visit at a time that works for you.",
      },
      {
        title: "Care built around the client",
        description:
          "Every service is arranged around individual needs and preferences rather than a fixed, one-size-fits-all plan.",
      },
    ],
  },
} as const;

export const legal = {
  jurisdiction: "Kenya",
  lastUpdated: "2026-08-12",
};
