import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { CookieConsentBanner } from '@/components/cookie-consent-banner';
import { GoogleAdsConversionEvents } from '@/components/google-ads-conversion-events';
import { WhatsAppFloatingButton } from '@/components/whatsapp-floating-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KBK Mornar',
  description: 'Kickboxing / Muaythai Mornar Split',
  metadataBase: new URL('https://www.kbk-mornar.hr'),
  alternates: {
    languages: {
      hr: '/',
      en: '/en',
      'x-default': '/',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='hr'>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied'
});`,
          }}
        />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=AW-18303407803'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('js', new Date());
gtag('config', 'AW-18303407803');`,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <GoogleAdsConversionEvents />
        <WhatsAppFloatingButton />
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  );
}
