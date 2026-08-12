import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { testimonials } from "@/config/testimonials";

export function TestimonialsPreview() {
  const preview = testimonials.slice(0, 3);
  const hasRealTestimonials = preview.some((t) => !t.isPlaceholder);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Testimonials" title="What clients say" />
          <Link
            to="/testimonials"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            Read more testimonials
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {!hasRealTestimonials ? (
          <PlaceholderNotice className="mt-6">
            Genuine client testimonials have not yet been supplied. The cards below are placeholders illustrating
            layout only.
          </PlaceholderNotice>
        ) : null}

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
