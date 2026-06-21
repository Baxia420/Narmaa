import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-slate-300 py-16 border-t border-brand-900">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-4">
          <Link to="/" aria-label="Narmaa Transport Home">
            <img
              src="/images/brand/logo.png"
              alt="Narmaa Transport Logo"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mt-2">
            Premium Malaysian hospitality. We provide quality car rental, private chauffeur tours, airport transfers, and comfortable homestays for an unforgettable travel experience in Malaysia.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Our Services</h3>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li>
              <Link to="/airport-shuttle" className="hover:text-white transition-colors">
                Airport Shuttle Transfer
              </Link>
            </li>
            <li>
              <Link to="/car-rental" className="hover:text-white transition-colors">
                Car Rental & Fleet
              </Link>
            </li>
            <li>
              <Link to="/homestay" className="hover:text-white transition-colors">
                Comfortable Homestays
              </Link>
            </li>
            <li>
              <Link to="/tours" className="hover:text-white transition-colors">
                Private Chauffeur Tours
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company & Support */}
        <div>
          <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Support</h3>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li>
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQ & Help
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact & Enquiries
              </Link>
            </li>
            <li className="text-slate-400">
              <span className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                Phone Support
              </span>
              <a href="tel:+60102113245" className="hover:text-white transition-colors">
                +60 10-211 3245
              </a>
            </li>
            <li className="text-slate-400">
              <span className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                Email Support
              </span>
              <a href="mailto:narmaa.transports@yahoo.com" className="hover:text-white transition-colors">
                narmaa.transports@yahoo.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal & Policies */}
        <div>
          <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Legal</h3>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </li>
            <li className="text-slate-400 mt-2 text-xs leading-relaxed">
              * Rates shown are starting prices and subject to season, duration, and availability. Final pricing confirmed via WhatsApp before booking.
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom Copyright */}
      <Container className="border-t border-brand-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>&copy; {currentYear} Narmaa Transport. Premium Malaysian Hospitality. All rights reserved.</p>
        <p>Managed by Narmaa Group</p>
      </Container>
    </footer>
  );
}
