import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { business } from "@/config/business";

export function AboutPreview() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-card">
          <ImagePlaceholder label="Team photography pending from Tahi Home-Based Care" className="h-full" />
        </div>
        <div>
          <SectionHeading eyebrow="About us" title="Who we are" />
          <p className="mt-5 text-base leading-relaxed text-neutral-600">{business.description.short}</p>
          <Link to="/about" className={buttonStyles({ variant: "outline", size: "md", className: "mt-6" })}>
            Learn more about us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
