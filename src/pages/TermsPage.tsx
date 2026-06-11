import { SEO, pageSEO } from "@/lib/seo";
import Container from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <>
      <SEO {...pageSEO.terms} />

      <section className="bg-slate-50 py-16 md:py-24">
        <Container className="max-w-4xl">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Terms & Conditions
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last Updated: June 10, 2026
            </p>

            <div className="mt-8 border-t border-slate-200 pt-8 prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                Welcome to Narmaa Transport. These Terms & Conditions outline the rules and regulations for the use of Narmaa Transport's Website, located at narmaatransport.com.
              </p>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  1. Enquiry and Non-Binding Quotes
                </h2>
                <p className="mt-2">
                  This website serves as a digital brochure and enquiry submission platform. Any form submissions, WhatsApp messages, or price quotes generated through this website are <strong>preliminary and non-binding</strong>.
                </p>
                <p className="mt-1">
                  Starting rates listed on the site are for reference and baseline budgeting only. They are subject to change based on booking duration, seasonal demand, delivery locations, and custom requirements.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  2. Booking & Confirmation Policy
                </h2>
                <p className="mt-2">
                  No final booking is established solely by submitting a form or sending a WhatsApp message. A booking is only considered confirmed once:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>We manually verify the availability of the vehicle, stay, or tour.</li>
                  <li>We agree on the final pricing and terms via WhatsApp or Email.</li>
                  <li>We receive the required booking deposit or full payment as agreed.</li>
                  <li>We issue an official booking confirmation message or invoice.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  3. Car Rental Terms
                </h2>
                <p className="mt-2">
                  For vehicle rentals, renters must provide a valid driving license (and an International Driving Permit for foreign nationals where applicable) before vehicle delivery. Renters are responsible for maintaining the vehicle in clean, rental-ready condition, adhering to traffic laws in Malaysia, and returning the vehicle with the agreed fuel level. Deposit details, mileage limits, and insurance terms will be detailed during WhatsApp confirmation.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  4. Homestay & Tour Policies
                </h2>
                <p className="mt-2">
                  Homestay guests must adhere to specific house rules, check-in/out times, and occupancy limits specified for each property. For tours, chauffeur services cover the agreed-upon itinerary only. Entry tickets, parking charges, road tolls, and food costs are the responsibility of the traveler unless explicitly included in your custom package quote.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  5. Limitation of Liability
                </h2>
                <p className="mt-2">
                  Narmaa Transport strives to ensure the accuracy of details on this website, but we make no warranties regarding completeness or instant availability. We reserve the right to decline booking requests due to scheduling conflicts, vehicle maintenance requirements, or property occupancy limits.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
