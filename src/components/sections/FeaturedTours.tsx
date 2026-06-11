import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getFeaturedTours } from "@/lib/data";
import TourCard from "@/components/cards/TourCard";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FeaturedTours() {
  const featuredTours = getFeaturedTours();

  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Popular tours">
      <Container>
        <SectionHeader
          accent="Explore Malaysia"
          title="Popular Tour Packages"
          subtitle="Private chauffeur day trips to Malaysia's most loved destinations — all starting from KL."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View All Tours
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
