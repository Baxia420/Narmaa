import { Link } from "react-router-dom";
import { Plane, Car, Home, Compass, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

const serviceCards = [
  {
    icon: Plane,
    title: "Airport Pickup",
    desc: "KLIA & KLIA2 transfers, any time",
    chips: ["KLIA / KLIA2", "Flight tracking", "Meet & greet"],
    price: "from RM120",
    href: "/airport-shuttle",
    headerBg: "bg-sky-500",
  },
  {
    icon: Car,
    title: "Car Rental",
    desc: "Economy cars to executive MPVs",
    chips: ["5-seat sedan", "7-seat MPV", "Alphard"],
    price: "from RM120/day",
    href: "/car-rental",
    headerBg: "bg-blue-600",
  },
  {
    icon: Home,
    title: "Homestays",
    desc: "Comfortable KL apartments",
    chips: ["Bukit Bintang", "Pool & gym", "2BR available"],
    price: "from RM250/night",
    href: "/homestay",
    headerBg: "bg-indigo-600",
  },
  {
    icon: Compass,
    title: "Private Tours",
    desc: "Chauffeur day trips from KL",
    chips: ["Malacca", "Cameron", "Genting"],
    price: "from RM300/trip",
    href: "/tours",
    headerBg: "bg-violet-600",
  },
];

const trustBadges = [
  "KLIA pickup",
  "Clean vehicles",
  "WhatsApp support",
  "Local team",
  "Flexible booking",
  "No hidden fees",
];

export default function TrustSection() {
  return (
    <section
      className="bg-slate-50 py-14 lg:py-16 border-b border-slate-200"
      aria-label="Services overview"
    >
      <Container>
        {/* Service Scene Strip */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {serviceCards.map(({ icon: Icon, title, desc, chips, price, href, headerBg }) => (
            <Link
              key={title}
              to={href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Colored header band — white text throughout */}
              <div className={`flex items-center gap-3 px-5 py-5 ${headerBg}`}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-jost text-base font-semibold text-white leading-tight">
                    {title}
                  </p>
                  <p className="mt-0.5 text-[13px] text-white/80 leading-tight hidden sm:block truncate">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-1.5 px-4 pt-4 pb-2">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-block rounded-full bg-slate-100 px-3 py-1 text-[12px] font-medium text-slate-600"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="mt-auto flex items-center justify-between px-4 py-4 border-t border-slate-100">
                <span className="text-sm font-semibold text-slate-700">{price}</span>
                <span className="flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                  View <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Trust badge strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 text-sm text-slate-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
              {badge}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
