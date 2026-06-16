import { Mail, Phone, Clock, MapPin} from "lucide-react";
import { SEO, pageSEO } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import { serviceAreas } from "@/lib/data";

export default function ContactPage() {
  const whatsappLink = getGeneralWhatsAppLink();

  return (
    <>
      <SEO {...pageSEO.contact} />

      {/* Modern Header Section */}
      <section className="text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/general/hero-malaysia.webp" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-900/80" aria-hidden="true" />
        </div>
        <Container className="relative z-10">
          <h1 className="font-jost text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Plan Your Journey
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-100 sm:text-xl">
            Need a rental car, a comfortable stay, or a customized private chauffeur tour? Get in touch and let us arrange everything for you.
          </p>
        </Container>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <span className="block font-satisfy text-xl text-blue-500 mb-1">We'd love to hear from you</span>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                We are a local Malaysian hospitality team dedicated to providing stress-free ground transport and accommodation. Reach out via WhatsApp for the fastest reply, or use our enquiry form.
              </p>

              {/* Direct WhatsApp Callout */}
              <div className="mt-8 rounded-2xl border border-green-200 bg-green-50/50 p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25d366] text-white">
                    <img src="/images/general/whatsapp-logo.svg" className="h-6 w-6 shrink-0" alt="" />
                  </span>
                  Fast Response on WhatsApp
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Avoid emails and forms if you are in a rush. Send us your travel requirements directly and we'll reply within a few hours.
                </p>
                <div className="mt-4">
                  <Button
                    as="anchor"
                    href={whatsappLink}
                    external
                    variant="whatsapp"
                    size="md"
                    className="w-full sm:w-auto"
                    iconLeft={<img src="/images/general/whatsapp-logo.svg" className="h-6 w-6 shrink-0" alt="" />}
                  >
                    Message Narmaa Transport
                  </Button>
                </div>
              </div>

              {/* Contact Info List */}
              <div className="mt-10 space-y-6">
                <div className="flex gap-4 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13px] sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Phone Number
                    </h4>
                    <a
                      href="tel:+60REPLACE_WITH_REAL_NUMBER"
                      className="mt-1 block text-[15px] sm:text-base font-medium text-slate-900 hover:text-blue-600 transition-colors break-all sm:break-words"
                    >
                      +60 REPLACE_WITH_REAL_NUMBER
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13px] sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Email Address
                    </h4>
                    <a
                      href="mailto:REPLACE_WITH_REAL_EMAIL"
                      className="mt-1 block text-[15px] sm:text-base font-medium text-slate-900 hover:text-blue-600 transition-colors break-all sm:break-words"
                    >
                      REPLACE_WITH_REAL_EMAIL
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13px] sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Operating Hours
                    </h4>
                    <p className="mt-1 text-[15px] sm:text-base font-medium text-slate-900 break-words">
                      REPLACE_WITH_REAL_HOURS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Service Areas Covered
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We provide car delivery, pickup, stays, and tour departures in:
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm">
            <span className="block font-satisfy text-lg text-blue-500 mb-1">Ready when you are</span>
            <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
              Send an enquiry
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Provide your details and we will review vehicle/stay availability for your dates.
            </p>

            <form
              action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
              method="POST"
              className="mt-8 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1.5 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    className="mt-1.5 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="e.g. +60 12-345 6789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1.5 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="name@example.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700">
                    Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="mt-1.5 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Car Rental">Car Rental</option>
                    <option value="Homestay">Homestay Accommodation</option>
                    <option value="Private Tour">Private Chauffeur Tour</option>
                    <option value="Combo Package">Combo Package (Stay + Transport)</option>
                    <option value="Airport Pickup">Airport Pickup / Drop-off</option>
                    <option value="Other">Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="travel-date" className="block text-sm font-medium text-slate-700">
                    Preferred Travel Date
                  </label>
                  <input
                    type="date"
                    id="travel-date"
                    name="travel_date"
                    className="mt-1.5 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="pickup-location" className="block text-sm font-medium text-slate-700">
                  Pickup Location / Homestay Area
                </label>
                <input
                  type="text"
                  id="pickup-location"
                  name="pickup_location"
                  className="mt-1.5 block w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="e.g. KLIA, Bukit Bintang, Cheras"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Your Requirements / Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 block w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Describe what you need: specific car choice, duration of rental, number of guests for stay, or customized tour points..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
