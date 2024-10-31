'use client';
import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import { Steps } from '@/components/steps';
import { Header } from '../_components/header';
import { CreateForm } from '@/components/create-form';
import { ImageUpload } from '@/components/image-upload';

const CreateNewsPage = () => {
  const [img, setImg] = useState('');
  const [steps, setStep] = useState({
    stepsItems: ['Izaberite sliku', 'Naslov & Opis', 'Pregled'],
    currentStep: 1,
  });

  return (
    <div className='flex flex-col items-center w-full bg-slate-100 py-8 space-y-12'>
      <Header title='Nova obavijest' description='Kreiraj novu obavijest!' />
      <Steps steps={steps} setStep={setStep} />
      {steps.currentStep === 1 && (
        <ImageUpload setImage={setImg} setStep={setStep} />
      )}
      {steps.currentStep === 2 && <CreateForm imgUrl={img} setStep={setStep} />}
      {steps.currentStep === 3 && (
        <p className='text-green-700 flex flex-row space-x-3 items-center text-xl font-semibold'>
          <CircleCheck className='h-6 w-6 mr-2' /> Obavijest je uspješno
          kreirana.
        </p>
      )}
    </div>
  );
};

export default CreateNewsPage;
