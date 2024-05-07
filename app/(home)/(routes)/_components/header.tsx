import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
  description: string;
  buttonText?: string;
}

export const Header = ({ title, description, buttonText }: HeaderProps) => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
      <div className='items-start justify-between py-4 border-b md:flex'>
        <div className='max-w-lg'>
          <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl border-l-8 rounded-lg border-[#e08639] pl-2'>
            {title}
          </h3>
          <p className='text-gray-600 mt-2'>{description}</p>
        </div>
        <div className='mt-6 md:mt-0'>
          {buttonText && <Button variant={'outline'}>{buttonText}</Button>}
        </div>
      </div>
    </div>
  );
};
