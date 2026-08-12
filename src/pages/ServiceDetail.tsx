import { useParams, Navigate, Link } from "react-router-dom";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CTASection } from "@/components/ui/CTASection";
import { getServiceBySlug, services } from "@/config/services";
import { serviceIcons } from "@/lib/serviceIcons";
import { whatsAppMessages } from "@/lib/whatsapp";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = serviceIcons[service.slug];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${service.name} | Tahi Home-Based Care`}
        description={service.shortDescription}
        path={`/services/${service.slug}`}
      />
      <Container className="py-6">
        <Breadcrumbs
          items={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }, { label: service.name }]}
        />
      </Container>

      <section className="pb-16 pt-4 sm:pb-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-card">
            <ImagePlaceholder icon={Icon} label={service.imageAlt} className="h-full" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl">{service.name}</h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">{service.detailedDescription}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={`/appointment?service=${encodeURIComponent(service.name)}`}
                className={buttonStyles({ variant: "primary", size: "lg" })}
              >
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Book This Service
              </Link>
              <WhatsAppButton size="lg" message={whatsAppMessages.service(service.name)} />
            </div>
          </div>
        </Container>

        <Container className="mt-14">
          <h2 className="text-2xl">What this can include</h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.subcategories.map((sub) => (
              <li key={sub.name} className="flex gap-3 rounded-lg border border-neutral-200 bg-white p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-neutral-900">{sub.name}</p>
                  <p className="mt-1 text-sm text-neutral-600">{sub.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>

        {related.length ? (
          <Container className="mt-16">
            <h2 className="text-2xl">Related services</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/services/${r.slug}`}
                    className="inline-block rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-600 hover:text-primary-700"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        ) : null}
      </section>

      <CTASection />
    </>
  );
}
