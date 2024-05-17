import { trainers } from '@/utils/trainers';
import { Header } from './header';
import { ShapeDivider } from './shape-divider';
import { TrainerItem } from './trainer-item';

export const Trainers = () => {
  return (
    <section className='pt-32 relative'>
      <Header
        title='Upoznajte naše trenere'
        description='Naši iskusni i certificirani treneri predani su vašem napretku, pružajući stručnu podršku i motivaciju na svakom koraku vašeg sportskog puta.'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='mt-12'>
          <ul className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
            {trainers.map((item, idx) => (
              <TrainerItem {...item} key={idx} />
            ))}
          </ul>
        </div>
      </div>
      <ShapeDivider />
    </section>
  );
};
