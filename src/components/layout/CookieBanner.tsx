import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { getConsent, setConsent, isPending } from "@/lib/cookies";
import { loadGoogleAnalytics } from "@/lib/analytics";

/**
 * CookieBanner — Slide-up cookie consent banner.
 *
 * Appears on first visit if the user hasn't made a consent choice yet.
 * Disappears permanently once Accept or Decline is clicked.
 * If accepted, Google Analytics is loaded immediately.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // If user already chose, load GA if they accepted and don't show banner
    const existing = getConsent();
    if (existing === "accepted") {
      loadGoogleAnalytics();
    } else if (isPending()) {
      // Slight delay so the banner slides in after page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  /** Animate banner out, then hide it */
  function dismiss() {
    setLeaving(true);
    setTimeout(() => setVisible(false), 400);
  }

  function handleAccept() {
    setConsent("accepted");
    loadGoogleAnalytics();
    dismiss();
  }

  function handleDecline() {
    setConsent("declined");
    dismiss();
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      style={{
        animation: leaving
          ? "cookieBannerOut 0.4s ease-in forwards"
          : "cookieBannerIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
      className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4 md:px-6 md:pb-6"
    >
      <div className="mx-auto max-w-5xl bg-brand-950 border border-brand-800 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
        <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:gap-6 md:p-6">

          {/* Icon */}
          <div className="flex-shrink-0 hidden md:flex items-center justify-center w-11 h-11 rounded-xl bg-brand-900 border border-brand-800">
            <Cookie className="w-5 h-5 text-brand-400" aria-hidden="true" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-200 leading-relaxed">
              <span className="font-semibold text-white">We use cookies</span>{" "}
              to understand how visitors use our site and to improve your
              experience. Analytics cookies (Google Analytics) are only set
              with your consent.{" "}
              <Link
                to="/cookie-policy"
                className="text-brand-400 underline underline-offset-2 hover:text-brand-300 transition-colors"
                onClick={handleDecline}
              >
                Cookie Policy
              </Link>
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              id="cookie-decline-btn"
              onClick={handleDecline}
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 border border-brand-700 hover:border-slate-400 hover:text-white transition-all duration-200"
            >
              Decline
            </button>
            <button
              id="cookie-accept-btn"
              onClick={handleAccept}
              className="px-5 py-2 rounded-lg text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-all duration-200 shadow-md shadow-brand-900/50"
            >
              Accept All
            </button>

            {/* Mobile close / decline shortcut */}
            <button
              id="cookie-close-btn"
              onClick={handleDecline}
              aria-label="Close cookie banner"
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-brand-900 transition-all duration-200"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Keyframe animations injected inline */}
      <style>{`
        @keyframes cookieBannerIn {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cookieBannerOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
}
