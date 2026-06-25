import { SEO } from "@/lib/seo";
import { pageSEO } from "@/lib/pageSEO";
import Container from "@/components/ui/Container";

export default function CookiePolicyPage() {
  return (
    <>
      <SEO {...pageSEO.cookiePolicy} />

      <section className="bg-slate-50 py-16 md:py-24">
        <Container className="max-w-4xl">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Cookie Policy
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last Updated: June 21, 2026
            </p>

            <div className="mt-8 border-t border-slate-200 pt-8 prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">

              <p>
                This Cookie Policy explains how Narmaa Transport ("we", "us", or "our") uses cookies and similar tracking technologies when you visit{" "}
                <strong>narmaatransport.com</strong>. By accepting cookies on our website, you consent to the use of cookies as described in this policy.
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  1. What Are Cookies?
                </h2>
                <p className="mt-2">
                  Cookies are small text files placed on your device (computer, phone, or tablet) when you visit a website. They allow the website to remember your actions and preferences over time, so you don't have to keep re-entering information whenever you revisit the site.
                </p>
                <p className="mt-2">
                  Cookies are not harmful — they cannot install software or access files on your computer. They simply store small amounts of information.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  2. Types of Cookies We Use
                </h2>
                <p className="mt-2">
                  We currently use two categories of cookies on our website:
                </p>

                <div className="mt-4 rounded-2xl border border-slate-200 overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-700 font-semibold">
                      <tr>
                        <th className="px-4 py-3 border-b border-slate-200">Type</th>
                        <th className="px-4 py-3 border-b border-slate-200">Purpose</th>
                        <th className="px-4 py-3 border-b border-slate-200">Consent Required?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Essential</td>
                        <td className="px-4 py-3">Required for the site to function correctly (e.g. storing your cookie consent preference)</td>
                        <td className="px-4 py-3 text-green-700 font-medium">Not required</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Analytics</td>
                        <td className="px-4 py-3">Google Analytics 4 — helps us understand how visitors use our website (pages viewed, time spent, traffic sources). Data is anonymised.</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">Required ✓</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  3. How We Use Cookie Data
                </h2>
                <p className="mt-2">We use analytics data to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Understand which pages are most popular and improve our content</li>
                  <li>Identify technical issues or slow-loading pages</li>
                  <li>Understand where our visitors come from (e.g. search engines, social media)</li>
                  <li>Improve the overall user experience on our website</li>
                </ul>
                <p className="mt-3">
                  We <strong>do not</strong> sell, share, or use this data for advertising purposes. Analytics data is aggregated and anonymised — we cannot identify individual visitors from it.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  4. Third-Party Cookies — Google Analytics
                </h2>
                <p className="mt-2">
                  If you accept analytics cookies, Google Analytics 4 (GA4) will be loaded. Google Analytics uses its own cookies (such as <code className="bg-slate-100 px-1 rounded text-xs">_ga</code> and <code className="bg-slate-100 px-1 rounded text-xs">_ga_*</code>) to track and report website traffic. These cookies are set by Google and are governed by{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline underline-offset-2 hover:text-brand-700"
                  >
                    Google's Privacy Policy
                  </a>.
                </p>
                <p className="mt-2">
                  We have configured Google Analytics with IP anonymisation enabled, which means your full IP address is never stored.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  5. Your Consent & How to Change It
                </h2>
                <p className="mt-2">
                  When you first visit our website, a cookie banner will appear asking for your consent. You can:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>
                    <strong>Accept All</strong> — Essential + Analytics cookies will be enabled
                  </li>
                  <li>
                    <strong>Decline</strong> — Only essential cookies will be used (no Analytics)
                  </li>
                </ul>
                <p className="mt-3">
                  Your preference is saved in your browser's local storage under the key{" "}
                  <code className="bg-slate-100 px-1 rounded text-xs">narmaa_cookie_consent</code>. To reset your preference and see the banner again, you can clear your browser's local storage or site data.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  6. Managing Cookies in Your Browser
                </h2>
                <p className="mt-2">
                  You can also manage or delete cookies at any time through your browser settings:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>
                    <strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data
                  </li>
                  <li>
                    <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings → Cookies and site permissions
                  </li>
                </ul>
                <p className="mt-3 text-slate-500 text-sm">
                  Note: Blocking all cookies may affect how some websites function.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  7. Contact Us
                </h2>
                <p className="mt-2">
                  If you have any questions about our use of cookies, please contact us at{" "}
                  <a
                    href="mailto:narmaa.transports@yahoo.com"
                    className="text-brand-600 underline underline-offset-2 hover:text-brand-700"
                  >
                    narmaa.transports@yahoo.com
                  </a>{" "}
                  or via our{" "}
                  <a
                    href="/contact"
                    className="text-brand-600 underline underline-offset-2 hover:text-brand-700"
                  >
                    Contact page
                  </a>.
                </p>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
