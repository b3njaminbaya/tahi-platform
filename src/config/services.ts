import type { Service } from "@/types";

/**
 * CENTRALIZED SERVICE DATA
 * ------------------------------------------------------------
 * Add, remove or reorder services by editing this array only —
 * ServiceGrid, ServiceCard and the Services/Home pages all read
 * from here. Subcategory names below are sourced from the
 * client's own marketing flyers (Tahi Homecare Limited, formerly
 * 3D Medcare); top-level names/descriptions stay general (no
 * statistics, certifications, or medical claims) until the client
 * supplies approved service copy. Counseling has no source
 * material from the flyers — kept as a category per the original
 * project brief, content still generic. `image` is left undefined
 * until real photography is supplied; components fall back to a
 * neutral placeholder graphic rather than a stock photo standing
 * in as if it were real.
 */
export const services: Service[] = [
  {
    slug: "nursing-care",
    name: "Nursing Care",
    shortDescription:
      "Skilled nursing support at home, including wound care, catheter care, injections and vital signs monitoring.",
    detailedDescription:
      "Our home nursing service is designed to support clients who need ongoing clinical attention without an extended hospital stay. A nurse can assist with day-to-day health monitoring, medication routines and recovery care in a familiar home environment.",
    subcategories: [
      {
        name: "Wound care & dressing",
        description: "Cleaning, dressing and monitoring of wounds, including suture and staple removal.",
      },
      { name: "Catheter & stoma care", description: "Ongoing catheter and stoma care support at home." },
      {
        name: "Injections & medication administration",
        description: "Administering prescribed injections and coordinating medication, including pharmacy support.",
      },
      {
        name: "Vital signs & health monitoring",
        description: "Blood pressure and blood sugar checks, plus routine vital signs monitoring.",
      },
      {
        name: "Nurse assistant / caregiver support",
        description: "General caregiver support for day-to-day health needs.",
      },
    ],
    imageAlt: "A home-based nurse providing care to a client — photo pending from client.",
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    shortDescription:
      "Mobility, occupational therapy and rehabilitation support delivered at home to help clients regain strength and independence.",
    detailedDescription:
      "Home-based physiotherapy sessions focus on movement, strength and rehabilitation goals set together with the client. Sessions take place in the client's own space, which can make ongoing rehabilitation more comfortable and consistent.",
    subcategories: [
      { name: "Mobility rehabilitation", description: "Exercises to help rebuild movement and coordination." },
      {
        name: "Occupational therapy",
        description: "Support regaining skills needed for everyday activities and independence.",
      },
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
      "Door-to-door doctor consultations and ambulance coordination as part of an ongoing home-based care plan.",
    detailedDescription:
      "We bridge state-of-the-art clinical medicine directly to our patients — bringing doctor consultations to the home and redefining accessibility and efficiency in healthcare for clients who find it difficult to travel.",
    subcategories: [
      { name: "Door-to-door doctor visits", description: "Scheduling and coordination support for home consultations." },
      { name: "Care plan follow-up", description: "Support following up on a physician's care instructions." },
      { name: "Ambulance services", description: "Coordination of ambulance support when a home visit isn't sufficient." },
    ],
    imageAlt: "A doctor consultation taking place in a home setting — photo pending from client.",
  },
  {
    slug: "palliative-care",
    name: "Palliative Care",
    shortDescription:
      "Compassionate comfort-focused support for elderly clients and those managing serious illness or disability.",
    detailedDescription:
      "Our palliative care service focuses on comfort, dignity and quality of life for clients living with serious or long-term illness, elderly clients, and clients living with a disability — with support extended to family members throughout the process.",
    subcategories: [
      { name: "Comfort-focused care", description: "Support centered on comfort and quality of life." },
      { name: "Elderly care", description: "Ongoing support for elderly clients managing day-to-day health and comfort needs." },
      { name: "Disability care & support", description: "Support for clients living with a disability, tailored to individual needs." },
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
