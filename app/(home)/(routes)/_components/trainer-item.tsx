interface TrainerItemProps {
  avatar: string;
  name: string;
  title: string;
  desc: string;
}

export const TrainerItem = ({
  avatar,
  name,
  title,
  desc,
}: TrainerItemProps) => {
  return (
    <li>
      <div className='w-full h-60 sm:h-52 md:h-56'>
        <img
          src={avatar}
          className='w-full h-full object-cover object-center shadow-md rounded-md'
          alt=''
        />
      </div>
      <div className='mt-4'>
        <h4 className='text-lg text-gray-700 font-semibold'>{name}</h4>
        <p className='text-indigo-600'>{title}</p>
        <p className='text-gray-600 mt-2'>{desc}</p>
      </div>
    </li>
  );
};
