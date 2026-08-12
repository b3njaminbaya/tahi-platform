import { Link } from "react-router-dom";
import { CalendarCheck, Mail, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Hero() {
  return (
    <section className="border-b border-neutral-200 bg-gradient-to-b from-primary-50/60 to-neutral-50">
      <Container className="grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-3.5 py-1.5 text-sm font-medium text-primary-800">
            <HeartHandshake className="h-4 w-4" aria-hidden="true" />
            Home-based healthcare, close to you
          </p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Compassionate healthcare, delivered to your home</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600">
            Tahi Home-Based Care connects you with professional nursing, therapy and wellness support — in the
            comfort and familiarity of your own home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/appointment" className={buttonStyles({ variant: "primary", size: "lg" })}>
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book an Appointment
            </Link>
            <Link to="/contact" className={buttonStyles({ variant: "outline", size: "lg" })}>
              <Mail className="h-5 w-5" aria-hidden="true" />
              Contact Us
            </Link>
            <WhatsAppButton size="lg" />
          </div>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-card lg:aspect-square">
          <ImagePlaceholder label="Client photography pending from Tahi Home-Based Care" className="h-full" />
        </div>
      </Container>
    </section>
  );
}
