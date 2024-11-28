"use client";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";
import { NAV_LINKS } from "@/utils/nav-links";

export const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b w-full md:text-sm hidden md:block">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Logo />
        </div>
        <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0`}>
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {NAV_LINKS.map((item, idx) => {
              return (
                <NavItem
                  key={idx}
                  idx={idx}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
