import { Helmet } from "react-helmet-async";
import { business } from "@/config/business";
import { siteUrl } from "@/config/seo";

/**
 * Site-wide structured data. Only includes facts we actually
 * know (name, url, WhatsApp contact) — no invented address,
 * email, ratings or credentials.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: business.name,
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: `+${business.whatsapp.number}`,
        areaServed: "KE",
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
