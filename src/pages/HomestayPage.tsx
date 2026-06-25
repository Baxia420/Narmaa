import { SEO } from "@/lib/seo";
import { pageSEO } from "@/lib/pageSEO";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import HomestayCard from "@/components/cards/HomestayCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import { homestays, getFAQsByCategory, serviceAreas } from "@/lib/data";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Home, Wifi, ShieldCheck, MapPin } from "lucide-react";

const stayBenefits = [
  {
    icon: Home,
    title: "Comfortable & Practical",
    description:
      "Our homestays are selected for comfort, cleanliness, and convenience - ideal for families and groups."},
  {
    icon: Wifi,
    title: "Modern Amenities",
    description:
      "Enjoy WiFi, air conditioning, kitchens, washing machines, and more in every homestay."},
  {
    icon: ShieldCheck,
    title: "Vetted Properties",
    description:
      "Each property is checked to ensure quality and safety standards are met before listing."},
  {
    icon: MapPin,
    title: "Great Locations",
    description:
      "Stay near public transport, shopping malls, and popular attractions across Kuala Lumpur."},
];

const homestayFaqs = getFAQsByCategory("Homestay");

export default function HomestayPage() {
  return (
    <>
      <SEO {...pageSEO.homestay} />

      {/* Homestay Listing Grid */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeader
            accent="Select Your Stay"
            title="Our Accommodation"
            subtitle="Browse our curated selection of comfortable stays in Kuala Lumpur."
          />
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {homestays.map((homestay) => (
              <HomestayCard 
                key={homestay.id} 
                homestay={homestay} 
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] max-w-md" 
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Stay Benefits */}
      <section className="py-16 md:py-20 bg-slate-50">
        <Container>
          <SectionHeader
            accent="Cozy & Convenient"
            title="Why Stay With Us"
            subtitle="We help you find the right place to stay - so you can enjoy your trip without worry."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stayBenefits.map((benefit) => (
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

      {/* Areas Covered */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              accent="Prime Locations"
              title="Areas We Cover"
              subtitle="Our homestays and services are available in key locations across Malaysia."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-slate-100 border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Booking Notes */}
      <section className="py-16 md:py-20 bg-slate-50">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 md:p-10">
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Booking Notes
            </h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                Check-in from <strong>3:00 PM</strong> · Check-out by <strong>11:00 AM</strong>.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                A security deposit may apply depending on the property.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                House rules and access instructions will be provided before your
                arrival.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                Prices shown are starting prices - final pricing confirmed
                before booking.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Homestay FAQ */}
      {homestayFaqs.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <SectionHeader
              accent="Helpful Information"
              title="Homestay FAQ"
              subtitle="Common questions about our homestay offerings."
            />
            <div className="mt-10 mx-auto max-w-3xl">
              <FAQAccordion items={homestayFaqs} />
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <CTASection
        title="Find your perfect stay"
        subtitle="Message us on WhatsApp to check availability and arrange your accommodation."
        ctaText="Request Homestay Booking on WhatsApp"
        ctaHref={generateWhatsAppLink({ serviceType: "Homestay", pageSource: "Homestay Page" })}
        variant="whatsapp"
      />
    </>
  );
}
