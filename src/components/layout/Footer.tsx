import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { primaryNav, footerLegalNav } from "@/config/nav";
import { services } from "@/config/services";
import { business } from "@/config/business";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5 text-lg font-semibold text-neutral-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                <path
                  d="M12 20.5C7.5 18 4.5 14.3 4.5 9.9 4.5 6.6 7.2 4 10.5 4c.9 0 1.8.3 2.5.8.7-.5 1.6-.8 2.5-.8 3.3 0 6 2.6 6 5.9 0 4.4-3 8.1-7.5 10.6"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 10.5v5M9.5 13h5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-serif">{business.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">{business.description.short}</p>
          <SocialLinks className="mt-5" iconClassName="text-neutral-500" />
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Navigation</h2>
          <ul className="mt-4 space-y-2.5">
            {primaryNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-sm text-neutral-600 transition-colors hover:text-primary-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-sm text-neutral-600 transition-colors hover:text-primary-700"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              <span>{business.whatsapp.displayNumber} (WhatsApp)</span>
            </li>
            {business.phone.value ? (
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                <span>{business.phone.value}</span>
              </li>
            ) : null}
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              {business.email.value ? (
                <a href={`mailto:${business.email.value}`} className="hover:text-primary-700">
                  {business.email.value}
                </a>
              ) : (
                <span className="italic text-neutral-400">Email coming soon</span>
              )}
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              {business.address.line ? (
                <span>
                  {business.address.line}, {business.address.city}
                </span>
              ) : (
                <span className="italic text-neutral-400">Location details coming soon</span>
              )}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              <span>{business.hours.summary}</span>
            </li>
          </ul>
          <WhatsAppButton className="mt-5 w-full sm:w-auto" />
        </div>
      </Container>

      <div className="border-t border-neutral-200">
        <Container className="flex flex-col-reverse items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-neutral-500">
            &copy; {year} {business.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {footerLegalNav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-xs text-neutral-500 transition-colors hover:text-primary-700">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
