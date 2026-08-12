import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ContactForm } from "@/components/forms/ContactForm";
import { business } from "@/config/business";
import { seoDefaults } from "@/config/seo";

export default function Contact() {
  return (
    <>
      <Seo {...seoDefaults.contact} />
      <Container className="py-6">
        <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Contact" }]} />
      </Container>

      <section className="pb-20 pt-4 sm:pb-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Contact us"
              description="Reach out with any questions about our services — we're happy to help."
            />

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-neutral-900">WhatsApp</p>
                  <p className="text-sm text-neutral-600">{business.whatsapp.displayNumber}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-neutral-900">Email</p>
                  <p className="text-sm italic text-neutral-400">Email address coming soon</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-neutral-900">Location</p>
                  <p className="text-sm italic text-neutral-400">
                    Serving clients in {business.address.city}, {business.address.country} — exact address details
                    coming soon
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-neutral-900">Working Hours</p>
                  <p className="text-sm italic text-neutral-400">Hours coming soon</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <WhatsAppButton size="lg" />
            </div>

            <div className="mt-8 border-t border-neutral-200 pt-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">Follow us</p>
              <SocialLinks iconClassName="text-neutral-500" />
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-xl">Send us a message</h2>
            <p className="mt-1 text-sm text-neutral-500">We'll respond as soon as we can.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
