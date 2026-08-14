import { PhoneCall, ClipboardList, CalendarCheck2, HomeIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";

const steps = [
  {
    icon: PhoneCall,
    title: "Reach out",
    description: "Contact us by phone, WhatsApp, or the online appointment form and tell us what kind of support you need.",
  },
  {
    icon: ClipboardList,
    title: "We listen & assess",
    description: "Our team discusses your situation with you to understand the type of care that would help most.",
  },
  {
    icon: CalendarCheck2,
    title: "We arrange your visit",
    description: "We coordinate the right professional and schedule a time that works for you.",
  },
  {
    icon: HomeIcon,
    title: "Ongoing home-based care",
    description: "Receive continued support at home, coordinated around your care plan for as long as you need it.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Getting started"
          title="How it works"
          description="From your first message to ongoing care, here's what to expect."
          className="mx-auto"
        />

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              {index < steps.length - 1 ? (
                <span
                  className="absolute top-7 hidden h-px w-full -translate-y-1/2 bg-neutral-200 lg:block"
                  style={{ left: "calc(50% + 38px)", width: "calc(100% - 48px)" }}
                  aria-hidden="true"
                />
              ) : null}
              <span className="relative flex h-14 w-14 items-center justify-center">
                <IconBadge icon={step.icon} className="h-14 w-14 ring-4 ring-white" />
                <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white ring-4 ring-white">
                  {index + 1}
                </span>
              </span>
              <h3 className="mt-4 text-lg">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
