import { SEO, pageSEO } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
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
  "@type": "LocalBusiness",
  name: "Narmaa Transport",
  description:
    "Car rental, comfortable homestays, and private chauffeur tours in Malaysia. Plan your trip with one trusted local team via WhatsApp.",
  url: "https://narmaatransport.com",
  image: "https://narmaatransport.com/images/general/og-image.jpg",
  telephone: "+60-REPLACE-WITH-REAL-NUMBER",
  email: "REPLACE_WITH_REAL_EMAIL",
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
  serviceType: [
    "Car Rental",
    "Homestay Accommodation",
    "Private Chauffeur Tours",
  ],
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
      <TrustSection />
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
