/* eslint-disable @next/next/no-img-element */
import { Card } from '@/components/ui/card';

export interface BlogCardDetailsProps {
  image: string;
  title: string;
  info: string;
}

export const BlogCardDetails = ({
  image,
  title,
  info,
}: BlogCardDetailsProps) => {
  return (
    <Card className='w-full h-full mx-auto group p-6 rounded-none shadow-lg flex flex-col'>
      <div className='flex flex-col md:flex-row items-center justify-start w-full h-full space-y-6'>
        <div className='w-full grid place-items-center'>
          <img
            src={image}
            alt={title}
            className='w-full max-w-md object-contain rounded-md'
          />
        </div>
        <div className='space-y-2'>
          <h3 className='text-lg text-left text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold'>
            {title}
          </h3>
          <p className='text-left text-gray-500 text-sm duration-150 group-hover:text-gray-800'>
            {info}
          </p>
        </div>
      </div>
    </Card>
  );
};
