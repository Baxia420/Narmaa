import { Plane, Car, Home, Compass } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import Container from "@/components/ui/Container";

const serviceHighlights = [
  { icon: Plane, label: "Airport Pickup", detail: "KLIA / KLIA2 transfers" },
  { icon: Car, label: "Car Rental", detail: "Economy to Executive MPV" },
  { icon: Home, label: "Homestays", detail: "KL apartments, from RM250/night" },
  { icon: Compass, label: "Private Tours", detail: "Malacca, Cameron, Genting" },
];

export default function LeadFormSection() {
  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <section className="bg-slate-50 py-16 lg:py-20" aria-label="Contact form">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-start">

            {/* Left column: context panel */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="block font-satisfy text-[22px] text-blue-500 mb-1">
                  Plan your trip
                </span>
                <h2 className="font-jost text-3xl font-bold text-slate-900 leading-tight">
                  Tell us what you need.
                </h2>
                <p className="mt-3 text-slate-500 leading-relaxed text-sm">
                  Fill in the form and we&rsquo;ll get back with availability and pricing — or message us directly on WhatsApp for a faster reply.
                </p>
              </div>

              {/* Service highlight list */}
              <div className="flex flex-col gap-3">
                {serviceHighlights.map(({ icon: Icon, label, detail }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl bg-white border border-slate-200 px-4 py-3 shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 leading-tight">{label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp shortcut */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                id="enquiry-whatsapp-cta"
                className="inline-flex items-center gap-2.5 self-start rounded-xl bg-[#25d366] px-5 py-3 text-sm font-jost font-semibold text-white shadow-sm transition-colors hover:bg-[#1fb855]"
              >
                <img src="/images/general/whatsapp-logo.svg" className="h-6 w-6 shrink-0" alt="" />
                Message on WhatsApp
              </a>
            </div>

            {/* Right column: form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
              <form
                action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
                method="POST"
                className="space-y-4"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    WhatsApp number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="+60 12 345 6789"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Service <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Airport Pickup">Airport Pickup</option>
                    <option value="Car Rental">Car Rental</option>
                    <option value="Homestay">Homestay</option>
                    <option value="Private Tour">Private Tour</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Two-column row: Travel Date + Pickup */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="travel-date"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Travel date
                    </label>
                    <input
                      type="date"
                      id="travel-date"
                      name="travel_date"
                      className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pickup-location"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Pickup area
                    </label>
                    <input
                      type="text"
                      id="pickup-location"
                      name="pickup_location"
                      className="block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="e.g. KLIA"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    className="block w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Dates, number of passengers, preferences..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="enquiry-submit-btn"
                  className="w-full rounded-xl bg-blue-600 px-6 py-3 text-sm font-jost font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
