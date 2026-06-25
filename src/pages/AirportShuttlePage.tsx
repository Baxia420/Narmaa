import { useState } from "react";
import { Plane, User, CheckCircle, AlertCircle, Luggage, Minus, Plus } from "lucide-react";
import { SEO } from "@/lib/seo";
import { pageSEO } from "@/lib/pageSEO";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import Button from "@/components/ui/Button";
import { airportShuttles, getFAQsByCategory } from "@/lib/data";
import { generateWhatsAppLink } from "@/lib/whatsapp";

// Shuttle Card Sub-component
type ShuttleCardProps = {
  shuttle: typeof airportShuttles[number];
};

function ShuttleCard({ shuttle }: ShuttleCardProps) {
  const [imgError, setImgError] = useState(false);
  
  const whatsappLink = generateWhatsAppLink({
    serviceType: "Airport Shuttle",
    itemName: shuttle.name,
    pageSource: `Airport Shuttle - ${shuttle.name}`});

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      {/* Image / Placeholder Area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center">
        {!imgError && shuttle.image ? (
          <img
            src={shuttle.image}
            alt={shuttle.name}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 gap-1.5 p-4">
            <Plane className="h-10 w-10 text-slate-300 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Airport Shuttle</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          {shuttle.category}
        </p>
        <h3 className="mt-1 font-jost text-xl lg:text-[22px] font-semibold text-slate-900 leading-snug">{shuttle.name}</h3>

        {/* Capacity / Seats */}
        <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4 text-slate-400" />
            <span>{shuttle.seatsLabel ? shuttle.seatsLabel : `Up to ${shuttle.seats} pax`}</span>
          </div>
          {shuttle.luggage && (
            <div className="flex items-center gap-1.5">
              <Luggage className="h-4 w-4 text-slate-400" />
              <span>{shuttle.luggage}</span>
            </div>
          )}
        </div>

        {/* Suitable For Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {shuttle.suitableFor.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-50 border border-slate-200 px-2.5 py-0.5 text-xs text-slate-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="mt-auto pt-5 border-t border-slate-100 mt-5">
          {shuttle.priceFrom && (
            <div className="mb-4">
              <span className="text-xs text-slate-400 block">Starting from</span>
              <span className="text-xl font-extrabold text-slate-950">RM {shuttle.priceFrom}</span>
              <span className="text-xs text-slate-500 font-normal"> / trip</span>
              <span className="text-[11.5px] text-emerald-600 font-medium block mt-1 leading-snug">
                Inclusive of Highway tolls, 1hr free waiting time
              </span>
            </div>
          )}
          
          <Button
            as="anchor"
            href={whatsappLink}
            external
            variant="whatsappOutline"
            size="md"
            className="w-full justify-center rounded-full min-h-[44px]"
            iconLeft={<img src="/images/general/whatsapp-logo.svg" className="h-6 w-6 shrink-0" alt="" />}
          >
            Check on WhatsApp
          </Button>
        </div>
      </div>
    </article>
  );
}

const policyInclusions = [
  "Vehicle for the confirmed route",
  "Highway tolls for standard KLIA/KLIA2 transfers",
  "Airport parking (standard KLIA/KLIA2 allowance)",
  "1 hour free waiting time after scheduled pickup",
  "Driver coordination and updates via WhatsApp",
  "Pre-journey confirmation with driver name, contact, and vehicle plate",
];

const policyExclusions = [
  "Waiting time beyond the 1-hour free allowance",
  "Attraction tickets, entrance fees, or meals",
  "Extra stops not confirmed before booking",
  "Midnight slot surcharge (11:30 PM – 6:00 AM) or public holiday premium",
  "Passengers or luggage exceeding the booked vehicle's capacity",
];

const policyExtras = [
  "Additional waiting time (charged per 30-minute block)",
  "Route changes or extra stopovers confirmed after booking",
  "Vehicle upgrade if actual headcount or luggage exceeds the booked vehicle",
  "Special handling for oversized or fragile items (must be confirmed in advance)",
  "Last-minute bookings under 24 hours' notice may carry a premium",
];

const policyScenarios = [
  "Flight delay: share your flight number early so pickup timing can be adjusted via WhatsApp",
  "No-show: driver waits through the free allowance; charges apply after that period",
  "Advance booking required: please book at least 24 hours before travel; contact us for urgent last-minute rides",
  "Driver may decline pickup if booking details do not match the actual trip",
  "Pets or unusual items must be confirmed before booking — not all vehicles are suitable",
];

// Main Page Component
export default function AirportShuttlePage() {
  const airportFaqs = getFAQsByCategory("Airport Shuttle");

  return (
    <>
      <SEO {...pageSEO.airportShuttle} />

      {/* Vehicles Grid */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeader
            accent="Select Your Vehicle"
            title="Choose Your Shuttle Vehicle"
            subtitle="We offer options from budget hatchbacks to large executive passenger vans and minibuses."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {airportShuttles.map((shuttle) => (
              <ShuttleCard key={shuttle.id} shuttle={shuttle} />
            ))}
          </div>
        </Container>
      </section>

      {/* Airport Shuttle Policy */}
      <section className="py-16 md:py-20 bg-slate-50">
        <Container>
          <SectionHeader
            accent="Before You Book"
            title="Airport Shuttle Policy"
            subtitle="Know what's included, what may cost extra, and what to confirm before your ride."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">

            {/* Inclusions */}
            <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900">What's Included</h3>
              </div>
              <ul className="space-y-2">
                {policyInclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 leading-snug">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 shrink-0">
                  <Minus className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Not Included</h3>
              </div>
              <ul className="space-y-2">
                {policyExclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 leading-snug">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Charged Extras */}
            <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 shrink-0">
                  <Plus className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Charged Extras</h3>
              </div>
              <ul className="space-y-2">
                {policyExtras.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 leading-snug">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Good to Know */}
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 shrink-0">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Good to Know</h3>
              </div>
              <ul className="space-y-2">
                {policyScenarios.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 leading-snug">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Reassurance note */}
          <p className="mt-8 text-center text-sm text-slate-500 bg-white rounded-xl border border-slate-200 inline-block px-5 py-3 w-full sm:w-auto">
            Final price and any extra charges will be confirmed with you on WhatsApp before booking.
          </p>
        </Container>
      </section>

      {/* FAQs */}
      {airportFaqs.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50">
          <Container>
            <SectionHeader
              accent="Common Enquiries"
              title="Airport Shuttle FAQ"
              subtitle="Common questions about our shuttle services."
            />
            <div className="mt-10 mx-auto max-w-3xl">
              <FAQAccordion items={airportFaqs} />
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <CTASection
        title="Ready to book your shuttle?"
        subtitle="Tell us your flight details, passenger count, and destination area via WhatsApp, and we'll confirm your ride in minutes."
        ctaText="Book Airport Shuttle on WhatsApp"
        ctaHref={generateWhatsAppLink({ serviceType: "Airport Shuttle", pageSource: "Airport Shuttle Page Footer" })}
        variant="whatsapp"
      />
    </>
  );
}
