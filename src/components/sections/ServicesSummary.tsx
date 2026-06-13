import { Link } from "react-router-dom";
import { Plane, Home, MapPin, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Plane,
    title: "Airport Shuttle",
    description: "Reliable transfers at KLIA and KLIA2 - any hour, any flight.",
    chips: ["KLIA / KLIA2", "Meet & Greet", "Group transfer"],
    cta: "View service",
    href: "/airport-shuttle",
    accentColor: "text-sky-600",
    chipBg: "bg-sky-50 text-sky-700"},
  {
    icon: Home,
    title: "Homestays",
    description: "Well-located KL apartments for families and short stays.",
    chips: ["Bukit Bintang", "2BR option", "Pool & Gym"],
    cta: "View stays",
    href: "/homestay",
    accentColor: "text-indigo-600",
    chipBg: "bg-indigo-50 text-indigo-700"},
  {
    icon: MapPin,
    title: "Private Tours",
    description: "Full-day and half-day chauffeur trips to top destinations.",
    chips: ["Malacca", "Cameron", "Genting", "Putrajaya"],
    cta: "View trips",
    href: "/tours",
    accentColor: "text-violet-600",
    chipBg: "bg-violet-50 text-violet-700"},
];

export default function ServicesSummary() {
  return (
    <section
      id="services"
      className="bg-white py-16 lg:py-20"
      aria-label="Our services"
    >
      <Container>
        <SectionHeader
          accent="Explore Malaysia"
          title="What we offer"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 ${service.accentColor} transition-colors group-hover:bg-blue-600 group-hover:text-white`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-4 font-jost text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>

                {/* Chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.chips.map((chip) => (
                    <span
                      key={chip}
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${service.chipBg}`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                  {service.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
