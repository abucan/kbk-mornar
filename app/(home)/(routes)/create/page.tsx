import { CreateForm } from '@/components/create-form';
import { Header } from '../_components/header';

const CreateNewsPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-slate-100 py-8'>
      <div className='mb-16'>
        <Header title='Nova obavijest' description='' />
      </div>
      <CreateForm />
    </div>
  );
};

export default CreateNewsPage;
