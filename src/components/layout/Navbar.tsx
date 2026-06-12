import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Airport Shuttle", path: "/airport-shuttle" },
    { name: "Car Rental", path: "/car-rental" },
    { name: "Homestay", path: "/homestay" },
    { name: "Tours", path: "/tours" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="Narmaa Transport Home">
          <img
            src="/images/brand/logo.svg"
            alt="Narmaa Transport"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-jost text-[15px] font-semibold transition-colors hover:text-brand-600 tracking-wide ${
                  isActive ? "text-brand-600" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            as="anchor"
            href={getGeneralWhatsAppLink()}
            external
            variant="whatsapp"
            size="md"
            iconLeft={<img src="/images/general/whatsapp-logo.svg" className="h-4 w-4" alt="" />}
          >
            WhatsApp Us
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-20 z-50 h-[calc(100vh-5rem)] w-full border-t border-slate-200 bg-white px-4 py-6 shadow-xl transition-all duration-300 md:hidden flex flex-col justify-between"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-jost text-lg font-semibold border-b border-slate-100 pb-3 transition-colors hover:text-brand-600 ${
                    isActive ? "text-brand-600" : "text-slate-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pb-8">
            <Button
              as="anchor"
              href={getGeneralWhatsAppLink()}
              external
              variant="whatsapp"
              size="lg"
              className="w-full justify-center"
              iconLeft={<img src="/images/general/whatsapp-logo.svg" className="h-5 w-5" alt="" />}
            >
              Message us on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
