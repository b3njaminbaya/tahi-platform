import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/config/services";
import { seoDefaults } from "@/config/seo";

export default function Services() {
  return (
    <>
      <Seo {...seoDefaults.services} />
      <Container className="py-6">
        <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Services" }]} />
      </Container>
      <section className="pb-16 pt-4 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title="Healthcare support, delivered at home"
            description="Each service below can be arranged individually or combined as part of a coordinated care plan. Select a service to learn more or request an appointment."
          />
          <div className="mt-10">
            <ServiceGrid services={services} />
          </div>
        </Container>
      </section>
      <CTASection
        title="Not sure which service is right for you?"
        description="Message us on WhatsApp and we'll help you figure out the right starting point."
      />
    </>
  );
}
