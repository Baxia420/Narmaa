import { SEO, pageSEO } from "@/lib/seo";
import Container from "@/components/ui/Container";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO {...pageSEO.privacyPolicy} />

      <section className="bg-slate-50 py-16 md:py-24">
        <Container className="max-w-4xl">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last Updated: June 10, 2026
            </p>

            <div className="mt-8 border-t border-slate-200 pt-8 prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                At Narmaa Transport, accessible from narmaatransport.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Narmaa Transport and how we use it.
              </p>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  1. Information We Collect
                </h2>
                <p className="mt-2">
                  We collect information that you choose to provide directly to us:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>
                    <strong>Enquiry Form Information:</strong> When you submit our enquiry form, we collect your name, email address, WhatsApp phone number, preferred travel dates, pickup location, and any message details. This form is processed securely using <strong>Formspree</strong>.
                  </li>
                  <li>
                    <strong>WhatsApp Communication:</strong> When you click our WhatsApp links to contact us, you share your WhatsApp account details (such as phone number and profile name) and the message content with us.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  2. How We Use Your Information
                </h2>
                <p className="mt-2">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>To verify vehicle, accommodation, or tour availability for your requested dates.</li>
                  <li>To provide you with customized quotes and itineraries.</li>
                  <li>To communicate with you via WhatsApp or email regarding your booking enquiry.</li>
                  <li>To manage and confirm your travel reservations.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  3. Payment Data Security
                </h2>
                <p className="mt-2">
                  Narmaa Transport <strong>does not</strong> collect, process, or store credit card or bank details on this website. All booking confirmations and payment arrangements (such as bank transfers or cash deposits) are discussed and confirmed directly via WhatsApp or official invoice.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  4. Third-Party Services
                </h2>
                <p className="mt-2">
                  We use Formspree to process our contact form enquiries. Formspree is a third-party service that safely transmits form submissions to our email inbox. They handle this data in accordance with their own privacy guidelines.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  5. Contact for Enquiries
                </h2>
                <p className="mt-2">
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>REPLACE_WITH_REAL_EMAIL</strong> or via our WhatsApp contact link.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
