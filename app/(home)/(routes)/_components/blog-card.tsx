import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-separator';
import { ArrowRight } from 'lucide-react';

export interface BlogCardProps {
  image: string;
  title: string;
  info: string;
}

export const BlogCard = ({ image, title, info }: BlogCardProps) => {
  return (
    <Card className='mx-auto group p-6 rounded-none shadow-none flex flex-col w-full h-full'>
      <CardContent className='flex flex-col aspect-square items-center justify-center p-6'>
        <div className='w-full grid place-items-center'>
          <img
            src={image}
            // loading='lazy'
            alt={title}
            className='w-full object-contain rounded-md'
          />
        </div>
        <div className='mt-3 space-y-2'>
          <h3 className='text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold'>
            {title}
          </h3>
          <p className=' text-gray-500 text-sm duration-150 group-hover:text-gray-800 line-clamp-3'>
            {info}
          </p>
        </div>
      </CardContent>
      <Separator />
      <Button
        className='w-full flex flex-row justify-end items-center mt-auto'
        variant={'link'}
      >
        Pročitaj više <ArrowRight className='h-5 w-5 ml-2' />
      </Button>
    </Card>
  );
};
