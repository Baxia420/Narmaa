import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getFeaturedHomestays } from "@/lib/data";
import HomestayCard from "@/components/cards/HomestayCard";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FeaturedHomestays() {
  const featuredHomestays = getFeaturedHomestays();

  return (
    <section
      className="bg-slate-50 py-16 lg:py-20"
      aria-label="Featured homestays"
    >
      <Container>
        <SectionHeader
          title="Featured Homestays"
          subtitle="Comfortable, well-located apartments in Kuala Lumpur for families and travellers."
        />

        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-4xl mx-auto">
          {featuredHomestays.map((homestay) => (
            <HomestayCard 
              key={homestay.id} 
              homestay={homestay} 
              className="w-full sm:w-[calc(50%-12px)] max-w-md" 
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/homestay"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View All Homestays
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
