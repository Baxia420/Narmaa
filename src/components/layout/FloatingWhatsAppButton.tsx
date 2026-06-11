import { MessageCircle } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={getGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white px-4 py-3 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-whatsapp-dark focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 md:px-5 md:py-3.5"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden md:inline text-sm font-semibold tracking-wide">
        WhatsApp Us
      </span>
    </a>
  );
}
