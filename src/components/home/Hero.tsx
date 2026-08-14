import { Link } from "react-router-dom";
import { CalendarCheck, Mail, HeartHandshake, Clock3, MapPinned, MessageCircleHeart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HeroIllustration } from "@/components/home/HeroIllustration";
import { business } from "@/config/business";

const trustChips = [
  { icon: Clock3, label: business.hours.summary },
  { icon: MapPinned, label: `${business.address.line}, ${business.address.city}` },
  { icon: MessageCircleHeart, label: "WhatsApp support" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-linear-to-b from-primary-50/70 via-sky-50/40 to-neutral-50">
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3.5 py-1.5 text-sm font-medium text-sky-800">
            <HeartHandshake className="h-4 w-4" aria-hidden="true" />
            Home-based healthcare, close to you
          </p>
          <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-[3.25rem]">
            Compassionate healthcare, <span className="text-primary-600">delivered to your home</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600">
            {business.name} connects you with professional nursing, therapy and wellness support — in the comfort
            and familiarity of your own home.
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

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-neutral-200/80 pt-6">
            {trustChips.map((chip) => (
              <li key={chip.label} className="flex items-center gap-2 text-sm font-medium text-neutral-600">
                <chip.icon className="h-4 w-4 text-primary-600" aria-hidden="true" />
                {chip.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-card-hover ring-1 ring-primary-900/5 lg:aspect-4/5">
            <HeroIllustration className="h-full w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
