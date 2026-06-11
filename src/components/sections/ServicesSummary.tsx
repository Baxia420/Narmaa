import { Link } from "react-router-dom";
import { Plane, Home, MapPin, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Plane,
    title: "Airport Shuttle Service",
    description:
      "Reliable airport pickup and drop-off services in Malaysia, starting from RM120. Choose from economy cars, sedans, MPVs, vans, and larger group transfers.",
    cta: "Explore Airport Shuttle",
    href: "/airport-shuttle",
  },
  {
    icon: Home,
    title: "Homestay",
    description:
      "Comfortable and well-located apartments in Kuala Lumpur — ideal for families and short stays.",
    cta: "View Homestays",
    href: "/homestay",
  },
  {
    icon: MapPin,
    title: "Private Tours",
    description:
      "Full-day and half-day private chauffeur tours to Malaysia's top destinations from KL.",
    cta: "See Tour Packages",
    href: "/tours",
  },
];

export default function ServicesSummary() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-16 lg:py-20"
      aria-label="Our services"
    >
      <Container>
        <SectionHeader
          title="Our Services"
          subtitle="Everything you need for a comfortable trip in Malaysia — all arranged by one team."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <Link
                  to={service.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
