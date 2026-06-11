import { SEO, pageSEO } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CarCard from "@/components/cards/CarCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import { cars, getFAQsByCategory } from "@/lib/data";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { ShieldCheck, Clock, Fuel, UserCheck } from "lucide-react";

const rentalBenefits = [
  {
    icon: ShieldCheck,
    title: "Clean & Well-Maintained",
    description:
      "Every vehicle is thoroughly cleaned and inspected before your rental begins.",
  },
  {
    icon: Clock,
    title: "Flexible Pickup & Return",
    description:
      "Arrange pickup and drop-off at your convenience — airport, hotel, or any agreed location.",
  },
  {
    icon: Fuel,
    title: "Full Tank Policy",
    description:
      "Vehicles are provided with a full tank of fuel so you can start your journey right away.",
  },
  {
    icon: UserCheck,
    title: "Chauffeur Option Available",
    description:
      "Prefer not to drive? Add a professional chauffeur to any rental for a stress-free experience.",
  },
];

const carRentalFaqs = getFAQsByCategory("Car Rental");

export default function CarRentalPage() {
  return (
    <>
      <SEO {...pageSEO.carRental} />

      <PageHero
        title="Car Rental in Malaysia"
        subtitle="Choose from comfortable, clean, and practical vehicles for city travel, airport pickup, family trips, and private journeys."
        backgroundImage="/images/general/car-rental-hero.webp"
      />

      {/* Rental Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeader
            title="Why Rent With Narmaa Transport"
            subtitle="We keep things simple, clean, and reliable — so you can focus on your trip."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Car Listing Grid */}
      <section className="py-16 md:py-20 bg-slate-50">
        <Container>
          <SectionHeader
            title="Our Fleet"
            subtitle="Browse our range of vehicles for every type of journey."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </Container>
      </section>

      {/* Rental Requirements Note */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Rental Requirements
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Rental requirements, deposit amount, driving license rules,
              mileage limits, and delivery options will be confirmed by Narmaa
              Transport before booking. Please message us on WhatsApp to discuss
              your specific needs and get a confirmed quote.
            </p>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Chauffeur Add-On
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Prefer not to drive? Professional chauffeur services are
                available for most vehicles in our fleet. This is especially
                popular for airport transfers, business travel, and guided tours.
                Contact us to add a chauffeur to your rental.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Car Rental FAQ */}
      {carRentalFaqs.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50">
          <Container>
            <SectionHeader
              title="Car Rental FAQ"
              subtitle="Common questions about renting with Narmaa Transport."
            />
            <div className="mt-10 mx-auto max-w-3xl">
              <FAQAccordion items={carRentalFaqs} />
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <CTASection
        title="Ready to hit the road?"
        subtitle="Message us on WhatsApp to check availability and get your confirmed quote."
        ctaText="Check Car Availability on WhatsApp"
        ctaHref={generateWhatsAppLink({ serviceType: "Car Rental", pageSource: "Car Rental Page" })}
        variant="whatsapp"
      />
    </>
  );
}
