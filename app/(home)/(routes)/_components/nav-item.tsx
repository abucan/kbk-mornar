export const NavItem = ({ path, title, idx }: NavItemProps) => {
  return (
    <li key={idx} className='text-gray-700 hover:text-indigo-600'>
      <a
        href={path}
        className='block uppercase font-light active:font-semibold'
      >
        {title}
      </a>
    </li>
  );
};
