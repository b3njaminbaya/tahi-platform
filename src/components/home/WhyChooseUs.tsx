import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/config/business";

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why choose us"
          title="A different kind of care experience"
          description="Here's what shapes the way we work with clients and families."
          className="mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {business.whyChooseUs.items.map((item) => (
            <div key={item.title} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-card">
              <CheckCircle2 className="h-6 w-6 text-primary-600" aria-hidden="true" />
              <h3 className="mt-4 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
