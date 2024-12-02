"use client";
import { Logo } from "./logo";
import { useState } from "react";
import { NavItem } from "./nav-item";
import Hamburger from "hamburger-react";
import { NAV_LINKS } from "@/utils/nav-links";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export const MobileNavbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handlePress = () => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 w-full md:text-sm md:hidden h-[90px] flex items-center shadow-md">
      <div className="items-center px-4 w-full mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between md:block">
          <div>
            <Logo />
          </div>
          <div>
            <Sheet open={isOpen} onOpenChange={setOpen}>
              <SheetTrigger className="self-end">
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
              </SheetTrigger>
              <SheetContent className="flex flex-col" side={"right"}>
                <ul className="space-y-6 text-center mt-6">
                  {NAV_LINKS.map((item, idx) => {
                    return (
                      <NavItem
                        onPress={handlePress}
                        key={idx}
                        idx={idx}
                        path={item.path}
                        title={item.title}
                      />
                    );
                  })}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
