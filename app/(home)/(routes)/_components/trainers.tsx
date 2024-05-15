import { Header } from './header';
import { ShapeDivider } from './shape-divider';
import { TrainerItem } from './trainer-item';

const team = [
  {
    avatar:
      'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
    name: 'Martiana dialan',
    title: 'Product designer',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
  },
];

export const Trainers = () => {
  return (
    <section className='py-32 relative'>
      <Header
        title='Upoznajte naše trenere'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industrys standard dummy.'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='mt-12'>
          <ul className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
            {team.map((item, idx) => (
              <TrainerItem {...item} key={idx} />
            ))}
          </ul>
        </div>
      </div>
      <ShapeDivider />
    </section>
  );
};
