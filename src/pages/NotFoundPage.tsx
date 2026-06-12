import { Link } from "react-router-dom";
import { ArrowLeft, Car, Home as HomeIcon, MapPin } from "lucide-react";
import { SEO, pageSEO } from "@/lib/seo";
import Button from "@/components/ui/Button";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function NotFoundPage() {
  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <>
      <SEO {...pageSEO.notFound} />

      <main className="relative min-h-screen flex flex-col justify-between bg-brand-950 text-white overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/general/road-bg.webp"
            alt="Malaysian road"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950/95 via-brand-950/85 to-brand-950/95" />
        </div>

        {/* Top Header Logo */}
        <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex justify-center sm:justify-start">
          <Link to="/">
            <img
              src="/images/brand/logo.svg"
              alt="Narmaa Transport Logo"
              className="h-9 w-auto brightness-0 invert"
            />
          </Link>
        </header>

        {/* Main 404 Content */}
        <div className="relative z-10 max-w-xl mx-auto px-6 py-12 text-center my-auto flex flex-col items-center">
          <span className="inline-flex items-center rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-300">
            Error 404
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
            Lost in the right direction?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-md">
            The page you're looking for has moved, but your Malaysian adventure is just beginning. Let's get you back on track.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              as="link"
              to="/"
              variant="primary"
              size="lg"
              className="flex-1 sm:flex-none"
              iconLeft={<ArrowLeft className="h-4 w-4" />}
            >
              Back to Home
            </Button>
            <Button
              as="anchor"
              href={whatsappLink}
              external
              variant="whatsapp"
              size="lg"
              className="flex-1 sm:flex-none"
              iconLeft={<img src="/images/general/whatsapp-logo.svg" className="h-5 w-5 shrink-0" alt="" />}
            >
              WhatsApp Support
            </Button>
          </div>

          {/* Service Quick Links */}
          <div className="mt-12 w-full border-t border-white/10 pt-8">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Quick Navigation
            </p>
            <div className="grid grid-cols-3 gap-3">
              <Link
                to="/car-rental"
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-xs font-semibold"
              >
                <Car className="h-5 w-5 text-blue-400 mb-1.5" />
                Car Rental
              </Link>
              <Link
                to="/homestay"
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-xs font-semibold"
              >
                <HomeIcon className="h-5 w-5 text-blue-400 mb-1.5" />
                Homestays
              </Link>
              <Link
                to="/tours"
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-xs font-semibold"
              >
                <MapPin className="h-5 w-5 text-blue-400 mb-1.5" />
                Tours
              </Link>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Narmaa Transport. Premium Ground Services & Accommodation.</p>
        </footer>
      </main>
    </>
  );
}
