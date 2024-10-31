'use client';
import { z } from 'zod';
import Image from 'next/image';
import { Form } from './ui/form';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { CustomFormField } from './form-field';
import { createPost } from '@/actions/posts.actions';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Unesite naslov.',
  }),
  description: z.string().min(2, {
    message: 'Unesite opis.',
  }),
});

export const CreateForm = ({ imgUrl, setStep }: CreateFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!imgUrl) {
      form.setError('description', { message: 'Slika je obavezna.' });
      return;
    }

    try {
      const payload: CreatePostProps = { ...values, imageUrl: imgUrl };
      const response = await createPost(payload);

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
      <Image
        width={800}
        height={600}
        alt='uploaded-image'
        className='object-contain max-w-sm w-full h-80 rounded-lg'
        src={imgUrl}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 w-full'
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
