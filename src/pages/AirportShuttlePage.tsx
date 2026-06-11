import { useState } from "react";
import { Plane, Clock, ShieldCheck, User, CheckCircle, MessageCircle, HelpCircle, AlertCircle } from "lucide-react";
import { SEO, pageSEO } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
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
    pageSource: `Airport Shuttle - ${shuttle.name}`,
  });

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
        <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
          <User className="h-4 w-4 text-slate-400" />
          <span>Capacity: Up to {shuttle.seats} passengers</span>
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
            </div>
          )}
          
          <Button
            as="anchor"
            href={whatsappLink}
            external
            variant="whatsapp"
            size="md"
            className="w-full justify-center"
            iconLeft={<MessageCircle className="h-4 w-4" />}
          >
            Check Availability
          </Button>
        </div>
      </div>
    </article>
  );
}

// Main Page Component
export default function AirportShuttlePage() {
  const airportFaqs = getFAQsByCategory("Airport Shuttle");
  
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Flight at 3:00 AM? No problem. We arrange pickup and drop-off services around the clock."
    },
    {
      icon: ShieldCheck,
      title: "Real-Time Flight Tracking",
      description: "We monitor flight details dynamically. If your landing is delayed, your chauffeur will adjust automatically."
    },
    {
      icon: User,
      title: "Professional Chauffeurs",
      description: "Expect welcoming local drivers who will assist with luggage and ensure a safe, smooth journey."
    },
    {
      icon: CheckCircle,
      title: "Transparent, Fixed Rates",
      description: "Pricing starts from RM120. Quotes include tolls and parking fees. Final price confirmed before you book."
    }
  ];

  return (
    <>
      <SEO
        title="Airport Shuttle Service in Malaysia | Narmaa Transport"
        description="Reliable airport pickup and drop-off services in Malaysia with vehicle options from economy cars to 18-seater minibuses. Starting from RM120."
        canonical="/airport-shuttle"
      />

      <PageHero
        accent="Seamless Transfers"
        title="Airport Shuttle Service in Malaysia"
        subtitle="Reliable airport pickup and drop-off services with vehicle options for solo travelers, families, and groups — starting from RM120."
        backgroundImage="/images/general/hero-malaysia.webp"
      />

      {/* Shuttle Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeader
            accent="Stress-Free Travel"
            title="Convenient Ground Transfers"
            subtitle="Let Narmaa Transport take care of the logistics between KLIA/KLIA2 and your hotel or homestay."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16 md:py-20 bg-slate-50">
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

      {/* Airport Transfer Notes */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950 md:text-2xl flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-blue-600 shrink-0" />
              Shuttle Transfer Notes
            </h2>
            <div className="mt-4 border-t border-slate-200 pt-4 space-y-3.5 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Pre-Booking Required:</strong> Shuttle transfer requests should be submitted at least 24 hours prior to travel. For last-minute bookings, please contact us directly on WhatsApp to confirm immediate availability.
              </p>
              <p>
                <strong>Meet & Greet:</strong> For arrivals, your driver will be waiting at the designated arrivals exit holding a nameboard. Complete driver coordinates and vehicle registration number will be sent to you via WhatsApp prior to departure.
              </p>
              <p>
                <strong>Pricing & Inclusions:</strong> Rates shown are starting prices for standard KLIA/KLIA2 transfers. Final quotes are confirmed before booking and are inclusive of toll charges and baseline parking. Surcharges may apply for travel during peak holiday seasons or midnight slots (11:30 PM – 6:00 AM).
              </p>
            </div>
          </div>
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
