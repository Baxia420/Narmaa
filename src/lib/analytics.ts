/**
 * analytics.ts — Google Analytics 4 (GA4) dynamic loader
 *
 * Loads the GA4 script ONLY after the user has accepted cookies.
 * This keeps Narmaa Transport GDPR compliant — GA never fires
 * before consent is given.
 *
 * To activate: replace GA_MEASUREMENT_ID with your real G-XXXXXXXXXX ID
 * from https://analytics.google.com
 */

export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // 👈 Replace with your real GA4 ID

let analyticsLoaded = false;

/**
 * Dynamically injects the GA4 script into the page.
 * Safe to call multiple times — only loads once.
 */
export function loadGoogleAnalytics(): void {
  if (analyticsLoaded || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
    if (GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
      console.warn(
        "[Narmaa Analytics] Replace GA_MEASUREMENT_ID in src/lib/analytics.ts with your real GA4 ID."
      );
    }
    return;
  }

  // Inject the gtag script tag
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize the dataLayer and configure GA4
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    // Anonymize IPs for extra privacy compliance
    anonymize_ip: true,
  });

  // Expose gtag globally so other parts of the app can use it
  window.gtag = gtag as typeof window.gtag;

  analyticsLoaded = true;
}
