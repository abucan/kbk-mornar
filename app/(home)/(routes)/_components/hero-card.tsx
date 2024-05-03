import { Card } from '@/components/ui/card';
import { heroItems } from '@/utils/hero-items';
import { HeroCardItem } from './hero-card-item';

export const HeroCard = () => {
  return (
    <Card className='grid grid-flow-col grid-rows-2 sm:grid-rows-1 place-items-center py-6 px-12 gap-4 sm:gap-0 sm:space-x-10 rounded-none shadow-lg'>
      {heroItems.map((item, _) => {
        const Icon = item.image;
        return (
          <HeroCardItem title={item.title} image={Icon} key={item.title} />
        );
      })}
    </Card>
  );
};
