'use client';

import db from '@/appwrite/databases';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from './ui/form';
import { Button } from './ui/button';
import { CustomFormField } from './form-field';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Unesite naslov.',
  }),
  description: z.string().min(2, {
    message: 'Unesite opis.',
  }),
});

export const CreateForm = ({
  imgUrl,
  setStep,
  imgPreview,
}: CreateFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const payload = { ...values, imageUrl: imgUrl };
      const response = await db.tasks.create(payload);

      if (response) {
        setStep((prev: any) => ({ ...prev, currentStep: 3 }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { isDirty, isValid, isSubmitting } = form.formState;

  return (
    <div className='flex flex-col space-y-4'>
      <img
        className='object-contain max-w-sm w-full h-80 rounded-lg'
        src={imgPreview}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 w-[300px]'
        >
          <CustomFormField
            name='title'
            label='Naslov teksta'
            placeholder='Unesite naslov teksta'
          />
          <CustomFormField
            name='description'
            label='Opis'
            placeholder='Unesite opis'
            isTextArea
          />
          <Button
            type='submit'
            className='w-full'
            variant='outline'
            disabled={!imgUrl || !isDirty || !isValid || isSubmitting}
          >
            Spremi
          </Button>
        </form>
      </Form>
    </div>
  );
};
