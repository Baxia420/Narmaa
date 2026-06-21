import { SEO, pageSEO } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import FeaturedFleet from "@/components/sections/FeaturedFleet";
import FeaturedHomestays from "@/components/sections/FeaturedHomestays";
import FeaturedTours from "@/components/sections/FeaturedTours";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQPreview from "@/components/sections/FAQPreview";
import LeadFormSection from "@/components/sections/LeadFormSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { Helmet } from "react-helmet-async";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TravelAgency"],
  name: "Narmaa Transport",
  description:
    "Car rental, comfortable homestays, and private chauffeur tours in Malaysia. Plan your trip with one trusted local team via WhatsApp.",
  url: "https://narmaatransport.com",
  image: "https://narmaatransport.com/images/general/og-image.jpg",
  areaServed: [
    "Kuala Lumpur",
    "Selangor",
    "KLIA",
    "KLIA2",
    "Putrajaya",
    "Malacca",
    "Cameron Highlands",
    "Genting Highlands",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Rental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport Shuttle" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Homestay Accommodation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Chauffeur Tours" } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <SEO {...pageSEO.home} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessJsonLd)}
        </script>
      </Helmet>

      <Hero />
      <FeaturedFleet />
      <FeaturedHomestays />
      <FeaturedTours />
      <HowItWorks />
      <Testimonials />
      <FAQPreview />
      <LeadFormSection />
      <FinalCTA />
    </>
  );
}
