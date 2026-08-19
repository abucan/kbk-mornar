'use client';
import { Header } from './header';
import { ShapeDivider } from './shape-divider';
import { ExpandableTrainerCard } from '@/components/trainer-expandable-card';
import { useI18n } from '@/components/providers/i18n-provider';

export const Trainers = () => {
  const { dictionary } = useI18n();

  return (
    <section className='pt-32 sm:pt-48 relative' id='trainers'>
      <Header
        title={dictionary.trainers.headerTitle}
        description={dictionary.trainers.headerDescription}
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16'>
        <ExpandableTrainerCard cards={dictionary.trainers.items} />
      </div>
      <ShapeDivider />
    </section>
  );
};
