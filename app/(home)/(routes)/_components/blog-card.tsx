import { Button } from '@/components/ui/button';

export interface BlogCardProps {
  image: string;
  title: string;
  info: string;
}

export const BlogCard = ({ image, title, info }: BlogCardProps) => {
  return (
    <article className='max-w-md mx-auto shadow-none border rounded-md duration-300 hover:shadow-sm'>
      <a>
        <img
          src={image}
          loading='lazy'
          alt={title}
          className='aspect-square object-cover shadow-md rounded-t-md'
        />
        <div className='pt-3 ml-4 mr-2 mb-3 flex flex-col gap-2'>
          <h3 className='text-xl text-gray-800 font-semibold line-clamp-1 capitalize'>
            {title}
          </h3>
          <p className='text-gray-500 text-sm mt-1 line-clamp-5'>{info}</p>
          <Button variant={'outline'} className='mt-1'>
            Pročitaj više
          </Button>
        </div>
      </a>
    </article>
  );
};
