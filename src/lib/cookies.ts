/**
 * cookies.ts — Cookie consent utility
 *
 * Stores the user's consent preference in localStorage so it persists
 * across page reloads without setting any cookies itself.
 *
 * Possible values:
 *   "accepted" — user clicked Accept
 *   "declined" — user clicked Decline
 *   null       — user has not yet made a choice
 */

const CONSENT_KEY = "narmaa_cookie_consent";

export type ConsentStatus = "accepted" | "declined" | null;

/** Returns the current consent status from localStorage. */
export function getConsent(): ConsentStatus {
  try {
    const val = localStorage.getItem(CONSENT_KEY);
    if (val === "accepted" || val === "declined") return val;
  } catch {
    // localStorage may be unavailable in some private browsing modes
  }
  return null;
}

/** Saves the user's consent choice to localStorage. */
export function setConsent(status: "accepted" | "declined"): void {
  try {
    localStorage.setItem(CONSENT_KEY, status);
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

/** Returns true if the user has accepted cookies. */
export function hasAccepted(): boolean {
  return getConsent() === "accepted";
}

/** Returns true if the user has not yet made a decision. */
export function isPending(): boolean {
  return getConsent() === null;
}
