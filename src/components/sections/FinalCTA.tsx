import { ArrowRight } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import Container from "@/components/ui/Container";

export default function FinalCTA() {
  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16 lg:py-20"
      aria-label="Call to action"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px"}}
        aria-hidden="true"
      />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="block font-satisfy text-[22px] text-blue-300 mb-2">
            Whenever you're ready
          </span>
          <h2 className="font-jost text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your trip. Your pace.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-blue-200 max-w-lg mx-auto">
            Browse what we offer, then message us when you're ready. No pressure — just simple travel planning.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta-whatsapp"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-7 py-3.5 text-base font-jost font-semibold text-white shadow-lg shadow-green-900/30 transition-all hover:bg-[#1fb855] hover:shadow-green-900/50 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <img src="/images/general/whatsapp-logo.svg" className="h-5 w-5 shrink-0" alt="" />
              Message us on WhatsApp
            </a>

            <a
              href="#services"
              id="final-cta-browse"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-base font-jost font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Browse services
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
