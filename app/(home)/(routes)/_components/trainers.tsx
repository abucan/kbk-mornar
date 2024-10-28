'use client';
import { trainers } from '@/utils/trainers';
import { Header } from './header';
import { ShapeDivider } from './shape-divider';
import { ExpandableTrainerCard } from '@/components/trainer-expandable-card';

export const Trainers = () => {
  return (
    <section className='pt-32 relative' id='treneri'>
      <Header
        title='Upoznajte naše trenere'
        description='Naši iskusni i certificirani treneri predani su vašem napretku, pružajući stručnu podršku i motivaciju na svakom koraku vašeg sportskog puta.'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16'>
        <ExpandableTrainerCard cards={trainers} />
      </div>
      <ShapeDivider />
    </section>
  );
};
