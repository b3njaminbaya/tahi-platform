import { Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { whatsAppMessages } from "@/lib/whatsapp";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to arrange home-based care?",
  description = "Book an appointment online or reach us directly on WhatsApp — whichever is easiest for you.",
}: CTASectionProps) {
  return (
    <section className="bg-primary-800 py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl text-3xl text-white sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-primary-100">{description}</p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link to="/appointment" className={buttonStyles({ variant: "secondary", size: "lg" })}>
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book an Appointment
          </Link>
          <WhatsAppButton size="lg" message={whatsAppMessages.appointment} />
        </div>
      </Container>
    </section>
  );
}
