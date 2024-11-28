import { PropsWithChildren } from "react";
import { Navbar } from "./(routes)/_components/navbar";
import { Footer } from "./(routes)/_components/footer";
import { MobileNavbar } from "./(routes)/_components/mobile-navbar";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
