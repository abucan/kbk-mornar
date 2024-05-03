import Image from 'next/image';
import sauna from '@/public/sauna.svg';
import massage from '@/public/massage.svg';

interface HeroCardItemProps {
  title: string;
  image: any;
}

export const HeroCardItem = ({ title, image }: HeroCardItemProps) => {
  const Icon = image;
  return (
    <div
      className='flex flex-col items-center justify-center space-y-4'
      key={title}
    >
      {title === 'Sauna' && (
        <Image src={sauna} alt='Sauna' width={24} height={24} />
      )}
      {title === 'Masaže' && (
        <Image src={massage} alt='Sauna' width={24} height={24} />
      )}
      {title !== 'Sauna' && title !== 'Masaže' && <Icon />}
      <h2 className='text-base text-center font-[600] font-mono uppercase tracking-widest text-[#e08639]'>
        {title}
      </h2>
    </div>
  );
};
