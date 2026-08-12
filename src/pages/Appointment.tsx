import { useSearchParams } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { whatsAppMessages } from "@/lib/whatsapp";
import { services } from "@/config/services";
import { seoDefaults } from "@/config/seo";

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

      <section className="pb-20 pt-4 sm:pb-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              eyebrow="Book an appointment"
              title="Request a consultation"
              description="Fill in the form and our team will follow up to confirm your appointment. Prefer to talk directly? Message us on WhatsApp instead."
            />
            <div className="mt-6">
              <WhatsAppButton size="lg" message={whatsAppMessages.appointment} />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-card sm:p-8">
            <AppointmentForm defaultService={defaultService} />
          </div>
        </Container>
      </section>
    </>
  );
}
