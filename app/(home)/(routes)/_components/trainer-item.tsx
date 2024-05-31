import { cn } from '@/lib/utils';

export interface TrainerItemProps {
  avatar: string;
  name: string;
  title: string;
  desc?: string;
  isDialog?: boolean;
}

export const TrainerItem = ({
  avatar,
  name,
  title,
  desc,
  isDialog,
}: TrainerItemProps) => {
  return (
    <li
      className={cn(
        'list-none w-full relative',
        isDialog && 'flex flex-row items-center justify-center'
      )}
    >
      {!isDialog && (
        <div className={cn('w-full h-72 relative')}>
          <img
            src={avatar}
            className={cn(
              'w-full h-full object-cover object-center shadow-md rounded-md'
            )}
            alt=''
          />
        </div>
      )}
      <div className='mt-4 flex-1'>
        <h4 className='text-lg text-gray-700 font-semibold text-left'>
          {name}
        </h4>
        <p className='text-indigo-600 text-left'>{title}</p>
        <p className='text-gray-600 mt-2 text-left w-full'>{desc && desc}</p>
      </div>
    </li>
  );
};
