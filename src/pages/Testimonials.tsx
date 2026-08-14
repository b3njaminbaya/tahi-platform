import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { CTASection } from "@/components/ui/CTASection";
import { testimonials } from "@/config/testimonials";
import { seoDefaults } from "@/config/seo";

export default function Testimonials() {
  return (
    <>
      <Seo {...seoDefaults.testimonials} />
      <Container className="py-6">
        <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Testimonials" }]} />
      </Container>

      <section className="bg-white pb-16 pt-4 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            description="Feedback from clients and families we've worked with."
          />

          <PlaceholderNotice className="mt-6">
            Genuine client testimonials have not yet been supplied. The cards below are placeholders illustrating
            layout only, and will be replaced with real testimonials (shared with consent).
          </PlaceholderNotice>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Had a good experience with us?"
        description="We'd love to hear from you — get in touch and share your feedback."
      />
    </>
  );
}
