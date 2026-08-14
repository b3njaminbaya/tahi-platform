import { useSearchParams } from "react-router-dom";
import { UserCheck, CalendarClock, MessageCircleQuestion } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { IconBadge } from "@/components/ui/IconBadge";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { whatsAppMessages } from "@/lib/whatsapp";
import { services } from "@/config/services";
import { seoDefaults } from "@/config/seo";

const reassurances = [
  {
    icon: UserCheck,
    title: "Personally confirmed",
    description: "Our team follows up on every request directly — never an automated confirmation.",
  },
  {
    icon: CalendarClock,
    title: "Flexible scheduling",
    description: "Choose the date and time that works best for you and your family.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Questions first? No problem",
    description: "Message us on WhatsApp before booking if you'd like to talk it through.",
  },
];

export default function Appointment() {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service");
  const defaultService = services.some((s) => s.name === requestedService) ? requestedService! : undefined;

  return (
    <>
      <Seo {...seoDefaults.appointment} />
      <Container className="py-6">
        <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Book Appointment" }]} />
      </Container>

      <section className="relative overflow-hidden pb-20 pt-4 sm:pb-28">
        <div
          className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              eyebrow="Book an appointment"
              title="Request a consultation"
              description="Fill in the form and our team will follow up to confirm your appointment. Prefer to talk directly? Message us on WhatsApp instead."
            />
            <div className="mt-6">
              <WhatsAppButton size="lg" message={whatsAppMessages.appointment} />
            </div>

            <ul className="mt-10 space-y-5">
              {reassurances.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <IconBadge icon={item.icon} tone="sky" />
                  <div>
                    <p className="font-semibold text-neutral-900">{item.title}</p>
                    <p className="mt-0.5 text-sm text-neutral-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-card sm:p-8">
            <AppointmentForm defaultService={defaultService} />
          </div>
        </Container>
      </section>
    </>
  );
}
