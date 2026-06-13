import { ArrowRight, Plane, Car, Home } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const statCards = [
  {
    icon: Plane,
    label: "KLIA Pickup",
    sub: "from RM120",
    href: "/airport-shuttle"},
  {
    icon: Car,
    label: "7-seat MPV",
    sub: "from RM280/day",
    href: "/car-rental"},
  {
    icon: Home,
    label: "Bukit Bintang",
    sub: "from RM250/night",
    href: "/homestay"},
];

export default function Hero() {
  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <section
      className="relative flex h-[100vh] min-h-[620px] items-center pb-20"
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
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <span className="mb-4 block font-satisfy text-[26px] md:text-[30px] text-blue-300 font-medium leading-none">
              Malaysia made simple
            </span>
            <h1 className="font-jost text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-[66px]">
              Transport, stays &amp;{" "}
              <span className="text-blue-300 drop-shadow-md">private tours</span>{" "}
              - one easy plan.
            </h1>

            <p className="mt-6 text-base md:text-lg leading-[1.8] text-slate-300 max-w-lg">
              Airport pickup, car rental, homestays, and chauffeur trips
              arranged through WhatsApp.
            </p>


          </div>


        </div>
      </div>
    </section>
  );
}
