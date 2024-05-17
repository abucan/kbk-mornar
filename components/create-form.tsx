'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from './ui/form';
import { Button } from './ui/button';
import { CustomFormField } from './form-field';
import { ImageUploadFormField } from './image-upload-field';
import { useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { imgDB, txtDB } from '@/firebase/config';
import { addDoc, collection } from 'firebase/firestore';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Unesite naslov.',
  }),
  description: z.string().min(2, {
    message: 'Unesite opis.',
  }),
  // image: z.string().min(2, {
  //   message: 'Prenesite sliku.',
  // }),
});

export const CreateForm = () => {
  const [img, setImg] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: 'Novi tekst',
      description:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
      // image: z.any,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // const valRef = collection(txtDB, 'news');
    // await addDoc(valRef, { values });
    console.log(values);
  }

  const handleUpload = (e: any) => {
    const file = e.target.files[0];

    const imgs = ref(imgDB, `images/${file.name}`);
    uploadBytes(imgs, file).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        console.log(val);
        // form.setValue('image', val);
        setImg(val);
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
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
        <ImageUploadFormField
          name='image'
          placeholder='Stavite sliku'
          label='Slika'
          handleUpload={handleUpload}
          value={img}
        />
        <Button type='submit' className='w-full' variant='outline'>
          Spremi
        </Button>
      </form>
    </Form>
  );
};
