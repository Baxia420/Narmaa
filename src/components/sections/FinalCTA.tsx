import { MessageCircle } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import Container from "@/components/ui/Container";

export default function FinalCTA() {
  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <section
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 lg:py-20"
      aria-label="Call to action"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to plan your trip?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-blue-100">
            Tell us what you need and we'll help arrange the right car, stay, or
            tour package.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25d366] px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#1fb855] focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2 focus:ring-offset-blue-900"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Message Narmaa Transport on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
