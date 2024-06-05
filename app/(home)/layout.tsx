import { PropsWithChildren } from 'react';
import { Navbar } from './(routes)/_components/navbar';
import { Footer } from './(routes)/_components/footer';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
