import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getFeaturedCars } from "@/lib/data";
import CarCard from "@/components/cards/CarCard";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FeaturedFleet() {
  const featuredCars = getFeaturedCars().slice(0, 4);

  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Our fleet">
      <Container>
        <SectionHeader
          accent="Drive in comfort"
          title="Our fleet"
          subtitle="Economy cars, spacious MPVs, and executive vehicles - browse and pick."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/car-rental"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-jost font-semibold text-slate-700 transition-all hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View all cars
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
