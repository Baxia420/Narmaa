import { SEO } from "@/lib/seo";
import { pageSEO } from "@/lib/pageSEO";
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
              Last Updated: June 25, 2026
            </p>

            <div className="mt-8 border-t border-slate-200 pt-8 prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                At Narmaa Transport, accessible from narmaatransport.com, one of our main priorities is the privacy of our visitors. This Privacy Policy describes the types of information that may be collected by Narmaa Transport and how we use it.
              </p>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  1. Information We Collect
                </h2>
                <p className="mt-2">
                  We collect information that you choose to share with us directly:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>
                    <strong>WhatsApp Communication:</strong> When you click our WhatsApp links to contact us, you share your WhatsApp account details (such as phone number and profile name) and the message content directly with us via WhatsApp.
                  </li>
                  <li>
                    <strong>Email:</strong> If you email us at narmaa.transports@yahoo.com, we receive your email address and any information you include in your message.
                  </li>
                </ul>
                <p className="mt-3 text-slate-500 text-sm">
                  Note: This website does not currently operate an online enquiry form. If an enquiry form is added in the future, this policy will be updated to reflect any additional data collected through it.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  2. How We Use Your Information
                </h2>
                <p className="mt-2">
                  We use the information you provide for the following purposes:
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
                  We currently do not use third-party form processing services on this website. If an enquiry form is enabled in the future, submissions may be processed by a third-party service such as Formspree, and this policy will be updated accordingly. We use WhatsApp (operated by Meta) for direct communication — their privacy policy governs your use of that platform.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  5. Cookies
                </h2>
                <p className="mt-2">
                  We use cookies and similar tracking technologies to improve your browsing experience on our website. Analytics cookies (Google Analytics) are only activated after you give your consent via the cookie banner shown on your first visit. For full details on which cookies we use and how to manage them, please read our{" "}
                  <a href="/cookie-policy" className="text-brand-600 underline underline-offset-2 hover:text-brand-700">
                    Cookie Policy
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  6. Contact for Enquiries
                </h2>
                <p className="mt-2">
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>narmaa.transports@yahoo.com</strong> or via our WhatsApp contact link.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
