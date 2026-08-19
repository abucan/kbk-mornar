import { PropsWithChildren } from 'react';
import { Navbar } from './(routes)/_components/navbar';
import { Footer } from './(routes)/_components/footer';
import { MobileNavbar } from './(routes)/_components/mobile-navbar';
import { getDictionary } from '@/i18n/dictionaries';
import { I18nProvider } from '@/components/providers/i18n-provider';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const dictionary = getDictionary('hr');

  return (
    <I18nProvider locale='hr' dictionary={dictionary}>
      <div>
        <Navbar />
        <MobileNavbar />
        <main>{children}</main>
        <Footer />
      </div>
    </I18nProvider>
  );
};

export default DashboardLayout;
