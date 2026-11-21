declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CONTACT_CONVERSION = 'AW-18580983667/-fKmCP-mtbwdEPOejZxF';

export function trackContactConversion() {
  window.gtag?.('event', 'conversion', { send_to: CONTACT_CONVERSION });
}
