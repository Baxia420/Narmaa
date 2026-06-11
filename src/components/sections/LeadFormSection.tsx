import { MessageCircle } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import Container from "@/components/ui/Container";

export default function LeadFormSection() {
  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Contact form">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Send Us an Enquiry
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Tell us what you need and we'll get back to you with availability
              and pricing.
            </p>
          </div>

          <form
            action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
            method="POST"
            className="mt-10 space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="you@email.com"
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label
                htmlFor="whatsapp"
                className="block text-sm font-medium text-slate-700"
              >
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="+60 12 345 6789"
              />
            </div>

            {/* Service Needed */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-slate-700"
              >
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Car Rental">Car Rental</option>
                <option value="Homestay">Homestay</option>
                <option value="Private Tour">Private Tour</option>
                <option value="Combo Package">Combo Package</option>
                <option value="Airport Pickup">Airport Pickup</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Travel Date */}
            <div>
              <label
                htmlFor="travel-date"
                className="block text-sm font-medium text-slate-700"
              >
                Travel Date
              </label>
              <input
                type="date"
                id="travel-date"
                name="travel_date"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label
                htmlFor="pickup-location"
                className="block text-sm font-medium text-slate-700"
              >
                Pickup Location / Preferred Area
              </label>
              <input
                type="text"
                id="pickup-location"
                name="pickup_location"
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="e.g. KLIA, Bukit Bintang, Petaling Jaya"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1 block w-full resize-y rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Tell us about your trip — dates, number of passengers, any preferences..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Enquiry
            </button>
          </form>

          {/* WhatsApp note */}
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-center">
            <p className="text-sm text-slate-700">
              Prefer a faster response?{" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#25d366] hover:underline"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Message us directly on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
