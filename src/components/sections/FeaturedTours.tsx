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
          title="Popular day trips"
          subtitle="Private chauffeur tours to Malaysia's most loved destinations - starting from KL."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-jost font-semibold text-slate-700 transition-all hover:border-emerald-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            View all trips
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
