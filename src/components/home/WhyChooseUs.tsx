import { HomeIcon, Stethoscope, HeartHandshake, DoorOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { business } from "@/config/business";

const icons = [DoorOpen, Stethoscope, HeartHandshake, HomeIcon];

export function WhyChooseUs() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why choose us"
          title="A different kind of care experience"
          description="Here's what shapes the way we work with clients and families."
          className="mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {business.whyChooseUs.items.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-card-hover"
            >
              <IconBadge icon={icons[index % icons.length]} />
              <h3 className="mt-4 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
