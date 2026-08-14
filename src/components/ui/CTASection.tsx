import { Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/ui/WaveDivider";
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
    <>
      <WaveDivider fillClassName="fill-primary-800" />
      <section className="relative overflow-hidden bg-primary-800 py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary-500/30 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative flex flex-col items-center gap-6 text-center">
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
    </>
  );
}
