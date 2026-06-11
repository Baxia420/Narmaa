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

// Page-specific SEO presets
export const pageSEO = {
  home: {
    title: "Narmaa Transport | Car Rental, Homestays & Private Tours in Malaysia",
    description:
      "Narmaa Transport offers car rental, comfortable homestays, and private chauffeur tours in Malaysia. Plan your trip with one trusted local team via WhatsApp.",
    canonical: "/",
  },
  carRental: {
    title: "Car Rental in Malaysia | Narmaa Transport",
    description:
      "Rent comfortable, clean vehicles for city travel, airport pickup, family trips, and private journeys across Malaysia with Narmaa Transport.",
    canonical: "/car-rental",
  },
  homestay: {
    title: "Homestays in Malaysia | Narmaa Transport",
    description:
      "Find comfortable and practical homestays for families, groups, and travellers visiting Kuala Lumpur and Malaysia with Narmaa Transport.",
    canonical: "/homestay",
  },
  tours: {
    title: "Private Chauffeur Tours in Malaysia | Narmaa Transport",
    description:
      "Explore Malaysia with private transport, flexible routes, and local travel support. Day trips to Malacca, Cameron Highlands, Genting, and more.",
    canonical: "/tours",
  },
  contact: {
    title: "Contact Narmaa Transport",
    description:
      "Get in touch with Narmaa Transport via WhatsApp or our contact form. We provide car rental, homestays, and private tours in Malaysia.",
    canonical: "/contact",
  },
  faq: {
    title: "Frequently Asked Questions | Narmaa Transport",
    description:
      "Find answers to common questions about car rental, homestays, private tours, booking, and payment with Narmaa Transport in Malaysia.",
    canonical: "/faq",
  },
  privacyPolicy: {
    title: "Privacy Policy | Narmaa Transport",
    description:
      "Read about how Narmaa Transport collects, uses, and protects your personal information.",
    canonical: "/privacy-policy",
  },
  terms: {
    title: "Terms & Booking Policy | Narmaa Transport",
    description:
      "Read the booking terms, pricing policy, and important service information for Narmaa Transport.",
    canonical: "/terms",
  },
  notFound: {
    title: "Page Not Found | Narmaa Transport",
    description: "The page you are looking for could not be found. Explore our services or contact us on WhatsApp.",
    canonical: "",
  },
};
