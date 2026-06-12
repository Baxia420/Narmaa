import { ArrowRight, Plane, Car, Home } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const statCards = [
  {
    icon: Plane,
    label: "KLIA Pickup",
    sub: "from RM120",
    href: "/airport-shuttle",
  },
  {
    icon: Car,
    label: "7-seat MPV",
    sub: "from RM280/day",
    href: "/car-rental",
  },
  {
    icon: Home,
    label: "Bukit Bintang",
    sub: "from RM250/night",
    href: "/homestay",
  },
];

export default function Hero() {
  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <section
      className="relative flex min-h-[620px] items-center lg:min-h-[720px]"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/general/hero-malaysia.webp"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Richer gradient for depth */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40"
          aria-hidden="true"
        />
        {/* Subtle bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/40 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <span className="mb-4 block font-satisfy text-[26px] md:text-[30px] text-blue-300 font-medium leading-none">
              Malaysia made simple
            </span>
            <h1 className="font-jost text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[66px]">
              Transport, stays &amp;{" "}
              <span className="text-blue-300">private tours</span>{" "}
              — one easy plan.
            </h1>

            <p className="mt-6 text-base md:text-lg leading-[1.8] text-slate-300 max-w-lg">
              Airport pickup, car rental, homestays, and chauffeur trips
              arranged through WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] px-7 py-3.5 text-base font-jost font-semibold text-white shadow-lg shadow-green-900/30 transition-all hover:bg-[#1fb855] hover:shadow-green-900/50 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <img src="/images/general/whatsapp-logo.svg" className="h-5 w-5" alt="WhatsApp" />
                Check availability
              </a>

              <Link
                to="/car-rental"
                id="hero-explore-cta"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-jost font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Explore options
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
