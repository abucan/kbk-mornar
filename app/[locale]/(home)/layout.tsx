import { PropsWithChildren } from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/app/(home)/(routes)/_components/navbar';
import { Footer } from '@/app/(home)/(routes)/_components/footer';
import { MobileNavbar } from '@/app/(home)/(routes)/_components/mobile-navbar';
import { getDictionary, isLocale } from '@/i18n/dictionaries';
import { I18nProvider } from '@/components/providers/i18n-provider';

const LocaleLayout = ({
  children,
  params,
}: PropsWithChildren<{ params: { locale: string } }>) => {
  if (!isLocale(params.locale) || params.locale === 'hr') {
    notFound();
  }

  const dictionary = getDictionary(params.locale);

  return (
    <I18nProvider locale={params.locale} dictionary={dictionary}>
      <div>
        <Navbar />
        <MobileNavbar />
        <main>{children}</main>
        <Footer />
      </div>
    </I18nProvider>
  );
};

export default LocaleLayout;
