import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-separator';
import { ArrowRight, ArrowRightCircle } from 'lucide-react';

interface BlogCardProps {
  image: string;
  title: string;
  info: string;
}

export const BlogCard = ({ image, title, info }: BlogCardProps) => {
  return (
    <Card className='w-full mx-auto group sm:max-w-sm p-6 rounded-none shadow-lg'>
      <a>
        <img
          src={image}
          loading='lazy'
          alt={title}
          className='w-full object-contain shadow-sm'
        />
        <div className='mt-3 space-y-2'>
          <h3 className='text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold'>
            {title}
          </h3>
          <p className=' text-gray-500 text-sm duration-150 group-hover:text-gray-800 line-clamp-3'>
            {info}
          </p>
        </div>
      </a>
      <Separator />
      <Button
        className='mt-4 w-full flex flex-row justify-end items-center'
        variant={'link'}
      >
        Pročitaj više <ArrowRight className='h-5 w-5 ml-2' />
      </Button>
    </Card>
  );
};
