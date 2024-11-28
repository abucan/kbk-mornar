"use client";
export const NavItem = ({ path, title, idx, onPress }: NavItemProps) => {
  return (
    <li
      key={idx}
      onClick={onPress}
      className="text-gray-700 hover:text-[#e08639]"
    >
      <a
        href={path}
        className="block uppercase font-light active:font-semibold"
      >
        {title}
      </a>
    </li>
  );
};
