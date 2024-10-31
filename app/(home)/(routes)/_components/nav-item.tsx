export const NavItem = ({ path, title, idx }: NavItemProps) => {
  return (
    <li key={idx} className='text-gray-700 hover:text-[#e08639]'>
      <a
        href={path}
        className='block uppercase font-light active:font-semibold'
      >
        {title}
      </a>
    </li>
  );
};
