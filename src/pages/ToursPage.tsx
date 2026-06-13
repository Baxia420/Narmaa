import { SEO, pageSEO } from "@/lib/seo";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import TourCard from "@/components/cards/TourCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import { tours, getFAQsByCategory } from "@/lib/data";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Car, Route, Clock, Compass } from "lucide-react";

const tourBenefits = [
  {
    icon: Car,
    title: "Private Transport",
    description:
      "Travel in your own comfortable vehicle with a dedicated driver - no sharing with strangers."},
  {
    icon: Route,
    title: "Flexible Routes",
    description:
      "Customise your itinerary to visit the places you want at your own pace."},
  {
    icon: Clock,
    title: "Door-to-Door Convenience",
    description:
      "Pickup and drop-off included from your hotel or homestay - no taxi queues or navigation worries."},
  {
    icon: Compass,
    title: "Local Knowledge",
    description:
      "Our drivers know Malaysia well and can recommend hidden gems, great food spots, and scenic routes."},
];

const tourFaqs = getFAQsByCategory("Tours");

export default function ToursPage() {
  return (
    <>
      <SEO {...pageSEO.tours} />

      {/* Tour Listing Grid */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeader
            accent="Popular Itineraries"
            title="Our Tours & Day Trips"
            subtitle="Popular destinations with private transport from Kuala Lumpur."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </Container>
      </section>

      {/* Tour Benefits */}
      <section className="py-16 md:py-20 bg-slate-50">
        <Container>
          <SectionHeader
            accent="Tailored Experience"
            title="Why Choose a Private Tour"
            subtitle="Skip the crowded buses and rigid schedules - travel Malaysia your way."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
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

      {/* Custom Itinerary Note */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10 text-center">
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Want a Custom Itinerary?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Don't see what you're looking for? We can create a custom tour
              tailored to your interests, group size, and schedule. Whether it's
              a multi-day trip, a specific destination, or a combination of
              activities - just tell us what you have in mind.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Message us on WhatsApp with your ideas and we'll put together a
              personalised itinerary for you.
            </p>
          </div>
        </Container>
      </section>

      {/* Tours FAQ */}
      {tourFaqs.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50">
          <Container>
            <SectionHeader
              accent="Help & Details"
              title="Tour FAQ"
              subtitle="Common questions about our private tours and day trips."
            />
            <div className="mt-10 mx-auto max-w-3xl">
              <FAQAccordion items={tourFaqs} />
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <CTASection
        title="Ready to explore Malaysia?"
        subtitle="Message us on WhatsApp to plan your perfect tour with private transport."
        ctaText="Ask About Tours on WhatsApp"
        ctaHref={generateWhatsAppLink({ serviceType: "Private Tour", pageSource: "Tours Page" })}
        variant="whatsapp"
      />
    </>
  );
}
