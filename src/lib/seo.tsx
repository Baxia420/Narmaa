import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
};

const BASE_URL = "https://narmaatransport.com";
const DEFAULT_OG_IMAGE = "/images/general/og-image.jpg";

export function SEO({ title, description, canonical, ogImage }: SEOProps) {
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const fullOgImage = `${BASE_URL}${ogImage || DEFAULT_OG_IMAGE}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Narmaa Transport" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  );
}

