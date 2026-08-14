import { Layers, Clock3, MapPinned } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/config/services";
import { business } from "@/config/business";
import { seoDefaults } from "@/config/seo";

const stats = [
  { icon: Layers, label: `${services.length} core service areas` },
  { icon: Clock3, label: business.hours.summary },
  { icon: MapPinned, label: `${business.address.line}, ${business.address.city}` },
];

export default function Services() {
  return (
    <>
      <Seo {...seoDefaults.services} />
      <Container className="py-6">
        <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Services" }]} />
      </Container>
      <section className="bg-white pb-16 pt-4 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title="Healthcare support, delivered at home"
            description="Each service below can be arranged individually or combined as part of a coordinated care plan. Select a service to learn more or request an appointment."
          />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
            {stats.map((stat) => (
              <li key={stat.label} className="flex items-center gap-2 text-sm font-medium text-neutral-600">
                <stat.icon className="h-4 w-4 text-primary-600" aria-hidden="true" />
                {stat.label}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ServiceGrid services={services} />
          </div>
        </Container>
      </section>

      <HowItWorks />

      <CTASection
        title="Not sure which service is right for you?"
        description="Message us on WhatsApp and we'll help you figure out the right starting point."
      />
    </>
  );
}
