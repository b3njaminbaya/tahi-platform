import { Helmet } from "react-helmet-async";
import { siteUrl } from "@/config/seo";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function Seo({ title, description, path, noindex = false }: SeoProps) {
  const url = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
