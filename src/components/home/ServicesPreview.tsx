import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { services } from "@/config/services";

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we offer"
            title="Our core services"
            description="Seven areas of home-based care, coordinated around each client's needs."
          />
          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10">
          <ServiceGrid services={services} />
        </div>
      </Container>
    </section>
  );
}
