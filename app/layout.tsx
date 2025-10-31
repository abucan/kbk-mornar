import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ReCaptchaProvider } from 'next-recaptcha-v3';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KBK Mornar',
  description: 'Kickboxing / Muaythai Mornar Split',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReCaptchaProvider
          reCaptchaKey={'6LezQv0rAAAAAEKmOln4zhwE_lkzR-NrDGXqXAbF'}
        >
          {children}
        </ReCaptchaProvider>
        <Analytics />
      </body>
    </html>
  );
}
