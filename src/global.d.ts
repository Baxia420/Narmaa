/**
 * global.d.ts — Global TypeScript type declarations
 *
 * Adds proper types for Google Analytics gtag and dataLayer
 * so TypeScript doesn't complain when we use them.
 */

interface Window {
  // Google Analytics data layer
  dataLayer: unknown[];
  // Google Analytics gtag function
  gtag: (...args: unknown[]) => void;
}
