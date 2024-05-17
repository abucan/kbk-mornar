import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
  description: string;
  buttonText?: string;
  isRightSide?: boolean;
}

export const Header = ({
  title,
  description,
  buttonText,
  isRightSide = false,
}: HeaderProps) => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
      <div
        className={`items-start justify-between py-4 border-b md:flex ${
          isRightSide ? 'flex-row-reverse' : ''
        }`}
      >
        <div
          className={`max-w-2xl flex flex-col items-center ${
            isRightSide ? 'sm:items-end' : 'sm:items-start'
          }`}
        >
          <h3
            className={`text-gray-800 text-3xl font-semibold sm:text-4xl rounded-lg border-[#e08639] ${
              isRightSide ? 'sm:border-r-8 sm:pr-2' : 'sm:border-l-8 sm:pl-2'
            }`}
          >
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
