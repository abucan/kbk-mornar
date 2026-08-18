'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const SEND_TO_PHONE_CLICK = 'AW-18303407803/lV_8CJiP3eMcELut35dE';
const SEND_TO_WHATSAPP_CLICK = 'AW-18303407803/1D8mCJuP3eMcELut35dE';

const trackConversion = (sendTo: string) => {
  window.gtag?.('event', 'conversion', {
    send_to: sendTo,
    transport_type: 'beacon',
  });
};

export const GoogleAdsConversionEvents = () => {
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute('href')?.trim().toLowerCase() || '';

      if (href.startsWith('tel:')) {
        trackConversion(SEND_TO_PHONE_CLICK);
        return;
      }

      if (href.includes('wa.me/')) {
        trackConversion(SEND_TO_WHATSAPP_CLICK);
      }
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleDocumentClick, {
        capture: true,
      });
    };
  }, []);

  return null;
};
