import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/config/business";

const faqs = [
  {
    question: "Is Tahi Home-Based Care available 24/7?",
    answer: "Yes. We're available around the clock — you can reach us anytime via WhatsApp or phone to arrange a visit.",
  },
  {
    question: "Which areas do you serve?",
    answer: `We're based in ${business.address.line}, ${business.address.city}, and coordinate home visits across the surrounding area. Message us on WhatsApp to confirm availability for your specific location.`,
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Fill out our online appointment form, message us on WhatsApp, or call us directly. Our team will follow up to confirm the details of your visit.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Nursing care, physiotherapy, nutrition, laboratory services, doctor appointments, palliative care and counseling — all delivered at home. Visit our Services page for the full list.",
  },
  {
    question: "I have questions before booking — can I just ask first?",
    answer: "Of course. Message us on WhatsApp or use the contact form with any questions — we're happy to talk it through before you book.",
  },
  {
    question: "Is this a substitute for emergency care?",
    answer:
      "No. If you're experiencing a medical emergency, please contact your local emergency services immediately. Our services support ongoing, non-emergency home-based care.",
  },
];

export function FAQ() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="Questions"
          title="Frequently asked questions"
          className="mx-auto"
        />

        <div className="mt-10 divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white shadow-card">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-6 py-5 open:pb-5 first:rounded-t-xl last:rounded-b-xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-neutral-900 marker:content-none">
                {faq.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-primary-600 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
