import type { Service } from "@/types";

/**
 * CENTRALIZED SERVICE DATA
 * ------------------------------------------------------------
 * Add, remove or reorder services by editing this array only —
 * ServiceGrid, ServiceCard and the Services/Home pages all read
 * from here. Descriptions are intentionally general (no
 * statistics, certifications, or medical claims) until the
 * client supplies approved service copy. `image` is left
 * undefined until real photography is supplied; components fall
 * back to a neutral placeholder graphic rather than a stock
 * photo standing in as if it were real.
 */
export const services: Service[] = [
  {
    slug: "nursing-care",
    name: "Nursing Care",
    shortDescription:
      "Skilled nursing support at home, including monitoring, medication assistance and post-procedure care.",
    detailedDescription:
      "Our home nursing service is designed to support clients who need ongoing clinical attention without an extended hospital stay. A nurse can assist with day-to-day health monitoring, medication routines and recovery care in a familiar home environment.",
    subcategories: [
      { name: "Medication management", description: "Support keeping track of prescribed medication schedules." },
      { name: "Wound care", description: "Routine dressing changes and wound monitoring." },
      { name: "Post-surgical care", description: "Recovery support following a hospital procedure." },
      { name: "Vital signs monitoring", description: "Regular checks of blood pressure, temperature and pulse." },
    ],
    imageAlt: "A home-based nurse providing care to a client — photo pending from client.",
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    shortDescription:
      "Mobility and rehabilitation support delivered at home to help clients regain strength and independence.",
    detailedDescription:
      "Home-based physiotherapy sessions focus on movement, strength and rehabilitation goals set together with the client. Sessions take place in the client's own space, which can make ongoing rehabilitation more comfortable and consistent.",
    subcategories: [
      { name: "Mobility rehabilitation", description: "Exercises to help rebuild movement and coordination." },
      { name: "Post-injury recovery", description: "Structured support following an injury." },
      { name: "Strength and balance training", description: "Guided exercise to support independence at home." },
    ],
    imageAlt: "A physiotherapist assisting a client with a mobility exercise — photo pending from client.",
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    shortDescription:
      "Personalized nutritional guidance to support recovery, chronic condition management and general wellbeing.",
    detailedDescription:
      "Our nutrition service helps clients and families understand practical dietary choices that support their specific health circumstances, working alongside any guidance already provided by a treating physician.",
    subcategories: [
      { name: "Dietary planning", description: "Guidance on meal planning suited to individual needs." },
      { name: "Chronic condition support", description: "Nutrition guidance alongside ongoing medical care." },
      { name: "Recovery nutrition", description: "Dietary support during post-illness or post-surgical recovery." },
    ],
    imageAlt: "Nutrition consultation materials — photo pending from client.",
  },
  {
    slug: "laboratory-services",
    name: "Laboratory Services",
    shortDescription:
      "Convenient sample collection at home, coordinated with a laboratory for processing and results.",
    detailedDescription:
      "For clients who find it difficult to travel, we can coordinate at-home sample collection, with processing carried out by a laboratory. This is intended to make routine testing more accessible without compromising on how the results are handled.",
    subcategories: [
      { name: "Sample collection", description: "At-home collection for routine laboratory tests." },
      { name: "Results coordination", description: "Assistance coordinating results with your treating physician." },
    ],
    imageAlt: "Laboratory sample collection kit — photo pending from client.",
  },
  {
    slug: "doctor-appointments",
    name: "Doctor Appointments",
    shortDescription:
      "Coordination and support for home-based doctor consultations as part of an ongoing care plan.",
    detailedDescription:
      "We help coordinate doctor consultations at home, making it easier for clients who have difficulty traveling to receive medical attention as part of a broader home-based care plan.",
    subcategories: [
      { name: "Consultation coordination", description: "Scheduling and coordination support for home visits." },
      { name: "Care plan follow-up", description: "Support following up on a physician's care instructions." },
    ],
    imageAlt: "A doctor consultation taking place in a home setting — photo pending from client.",
  },
  {
    slug: "palliative-care",
    name: "Palliative Care",
    shortDescription:
      "Compassionate comfort-focused support for clients managing serious or long-term illness.",
    detailedDescription:
      "Our palliative care service focuses on comfort, dignity and quality of life for clients living with serious or long-term illness, with support extended to family members throughout the process.",
    subcategories: [
      { name: "Comfort-focused care", description: "Support centered on comfort and quality of life." },
      { name: "Family support", description: "Guidance and support for family members providing care at home." },
    ],
    imageAlt: "A caregiver holding the hand of a client — photo pending from client.",
  },
  {
    slug: "counseling",
    name: "Counseling",
    shortDescription:
      "A supportive, confidential space to talk through emotional wellbeing, illness or caregiving stress.",
    detailedDescription:
      "Counseling sessions offer clients and family caregivers a confidential space to talk through the emotional aspects of illness, recovery or caregiving, delivered with sensitivity to each person's circumstances.",
    subcategories: [
      { name: "Individual counseling", description: "One-on-one confidential support sessions." },
      { name: "Family and caregiver support", description: "Support for family members involved in caregiving." },
    ],
    imageAlt: "A quiet, comfortable counseling setting — photo pending from client.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
