import { Helmet } from "react-helmet-async";
import { business } from "@/config/business";
import { siteUrl } from "@/config/seo";

/**
 * Site-wide structured data. Only includes facts we actually
 * know — no invented ratings, credentials, or precise street
 * address (only the neighborhood the client has confirmed).
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: business.name,
    legalName: business.legalName,
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    ...(business.email.value ? { email: business.email.value } : {}),
    ...(business.address.line
      ? {
          address: {
            "@type": "PostalAddress",
            addressLocality: business.address.line,
            addressRegion: business.address.city,
            addressCountry: "KE",
          },
        }
      : {}),
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
