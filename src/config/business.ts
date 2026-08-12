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
  /** Registered entity name — used for footer copyright and legal pages only. */
  legalName: "Tahi Homecare Limited",
  /**
   * Sourced from an older "3D Medcare" flyer (the company's previous
   * name/branding) — carried over on the client's confirmation that
   * all three source flyers reflect the current business accurately.
   * Flag for the client to confirm or replace if they'd prefer a
   * tagline written under the current name.
   */
  tagline: "Your health is our priority",
  taglineIsPlaceholder: false,
  domain: "https://tahihomebasedcare.com",

  whatsapp: {
    /** E.164, no plus, no spaces — required format for wa.me links. */
    number: "254117995229",
    displayNumber: "+254 117 995 229",
  },

  /** General phone line(s), distinct from the WhatsApp number above. */
  phone: {
    value: "0791 227 353 / 0729 975 706" as string | null,
    isPlaceholder: false,
  },

  email: {
    value: "tahihomecare@gmail.com" as string | null,
    isPlaceholder: false,
  },

  address: {
    line: "Buruburu" as string | null,
    city: "Nairobi",
    country: "Kenya",
    isPlaceholder: false,
  },

  hours: {
    summary: "Available 24/7",
    isPlaceholder: false,
  },

  description: {
    short:
      "Tahi Homecare Limited is a team of medics committed to addressing emergency health issues in the comfort of your home with just a phone call. We offer 24/7 home-based health support.",
    isPlaceholder: false,
  },

  /** Derived from the mission below — the client did not supply a separate vision statement. */
  vision: {
    value:
      "A future where quality healthcare is never out of reach — where every family can access professional medical care from the comfort of home, any time it's needed.",
    isPlaceholder: false,
  },

  mission: {
    value:
      "We bridge state-of-the-art clinical medicine directly to our patients, thus redefining accessibility and efficiency in healthcare.",
    isPlaceholder: false,
  },

  /** Distilled from recurring themes across the client's flyers (accessibility, compassion, hospital-level expertise, 24/7 availability) — not separately labeled "core values" in the source material. */
  coreValues: {
    items: [
      {
        title: "Accessibility",
        description: "Bringing state-of-the-art clinical care directly to your door, wherever home is.",
      },
      {
        title: "Compassion",
        description: "Treating every client with warmth, dignity and personalized attention.",
      },
      {
        title: "Expertise",
        description: "Delivering the same standard of skill and care you'd expect from a hospital visit.",
      },
      {
        title: "Availability",
        description: "Ready around the clock — 24/7 home-based health support, every day of the week.",
      },
    ],
    isPlaceholder: false,
  },

  /** Verbatim from the client's services flyer. */
  whyChooseUs: {
    items: [
      {
        title: "Comprehensive door-to-door care",
        description:
          "We offer comprehensive door-to-door services, ensuring patients receive high-quality medical attention in the comfort of their own homes.",
      },
      {
        title: "Hospital-level expertise at home",
        description:
          "Our services cater to a wide range of medical needs, from routine check-ups and diagnostics to advanced treatments, all delivered with the same expertise and care as a hospital visit.",
      },
      {
        title: "Personalized, immediate care",
        description:
          "Our door-to-door visits not only provide convenience but also foster a more personalized and immediate healthcare experience.",
      },
      {
        title: "Door-to-door doctor access",
        description:
          "We bridge state-of-the-art clinical medicine directly to our patients, thus redefining accessibility and efficiency in healthcare.",
      },
    ],
  },
} as const;

export const legal = {
  jurisdiction: "Kenya",
  lastUpdated: "2026-08-12",
};
