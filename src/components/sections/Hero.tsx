import { ArrowRight, MessageCircle } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <section
      className="relative flex min-h-[600px] items-center lg:min-h-[700px]"
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
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-3 block font-satisfy text-[28px] md:text-[34px] text-blue-400 font-medium">
            Your Journey Starts Here
          </span>
          <h1 className="font-jost text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[70px]">
            Explore Malaysia, Your Way.
          </h1>

          <p className="mt-6 text-base md:text-lg leading-[1.8] text-slate-200 font-sans max-w-xl">
            Car rentals, private chauffeur tours, airport pickup, and comfortable
            homestays — arranged in one simple WhatsApp conversation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25d366] px-6 py-3.5 text-base font-jost font-semibold text-white shadow-lg transition-colors hover:bg-[#1fb855] focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Plan My Trip on WhatsApp
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 px-6 py-3.5 text-base font-jost font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              View Services
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
