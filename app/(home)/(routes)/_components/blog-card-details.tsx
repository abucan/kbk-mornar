import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-separator';
import { ArrowRight } from 'lucide-react';

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
    <Card className='w-full h-full mx-auto group p-6 rounded-md shadow-lg flex flex-col'>
      <div className='flex flex-col md:flex-row items-center justify-center w-full h-full gap-12'>
        <div className='w-full grid place-items-center flex-1'>
          <img
            src={image}
            // loading='lazy'
            alt={title}
            className='w-full object-contain rounded-md'
          />
        </div>
        <div className='mt-3 space-y-2 flex-1'>
          <h3 className='text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold'>
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
