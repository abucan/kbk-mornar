"use client";
import Link from "next/link";

export const NavItem = ({ path, title, idx, onPress }: NavItemProps) => {
  return (
    <Link
      key={idx}
      onClick={onPress}
      className="text-gray-700 block hover:text-[#e08639] font-light active:font-semibold text-[15px]"
      href={path}
      scroll={true}
    >
      {title}
    </Link>
  );
};
