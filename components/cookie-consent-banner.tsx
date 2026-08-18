'use client';

import { useEffect, useState } from 'react';

type ConsentChoice = 'granted' | 'denied';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = 'kbk-cookie-consent-v2';

const grantedConsent = {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted',
} as const;

const deniedConsent = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
} as const;

export const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedChoice = window.localStorage.getItem(CONSENT_KEY) as
      | ConsentChoice
      | null;

    if (!storedChoice) {
      setIsVisible(true);
      return;
    }

    if (storedChoice === 'granted') {
      window.gtag?.('consent', 'update', grantedConsent);
      return;
    }

    window.gtag?.('consent', 'update', deniedConsent);
  }, []);

  const handleConsent = (choice: ConsentChoice) => {
    const consentValues = choice === 'granted' ? grantedConsent : deniedConsent;
    window.gtag?.('consent', 'update', consentValues);
    window.localStorage.setItem(CONSENT_KEY, choice);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className='fixed inset-x-0 bottom-0 z-[80] border-t border-gray-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur'>
      <div className='mx-auto flex w-full max-w-screen-xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <p className='text-sm text-gray-700'>
          Koristimo kolačiće za analitiku i oglase. Odaberite želite li prihvatiti
          sve kolačiće.
        </p>
        <div className='flex gap-2'>
          <button
            type='button'
            onClick={() => handleConsent('denied')}
            className='rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100'
          >
            Odbij
          </button>
          <button
            type='button'
            onClick={() => handleConsent('granted')}
            className='rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700'
          >
            Prihvati
          </button>
        </div>
      </div>
    </div>
  );
};
