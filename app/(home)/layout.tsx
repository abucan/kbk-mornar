import { PropsWithChildren } from 'react';
import { Navbar } from './(routes)/_components/navbar';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
