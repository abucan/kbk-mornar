'use client';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { CircleCheck } from 'lucide-react';
import { Form, FormMessage } from './ui/form';
import { CustomFormField } from './form-field';
import { zodResolver } from '@hookform/resolvers/zod';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Unesite ime i prezime',
  }),
  email: z.string().min(2, {
    message: 'Unesite email.',
  }),
  message: z.string().min(2, {
    message: 'Unesite poruku.',
  }),
});

export const SendEmailForm = () => {
  const [successMsg, setSuccessMsg] = useState('');
  const [isReCaptchaLoaded, setIsReCaptchaLoaded] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const serviceId = 'service_hofulhi';
  const templateId = 'template_x1rhv7b';
  const publicKey = '9xmUOq6i3da0wD83c';
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

  useEffect(() => {
    const checkReCaptcha = () => {
      if (window.grecaptcha) {
        setIsReCaptchaLoaded(true);
      } else {
        setTimeout(checkReCaptcha, 100);
      }
    };
    checkReCaptcha();
  }, []);

  async function getReCaptchaToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject(new Error('reCAPTCHA not loaded'));
        return;
      }

      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(recaptchaSiteKey, {
            action: 'contact_form',
          });
          resolve(token);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const recaptchaToken = await getReCaptchaToken();

      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: 'KBK Mornar Split',
        message: values.message,
        'g-recaptcha-response': recaptchaToken,
      };

      emailjs
        .send(serviceId, templateId, templateParams, {
          publicKey,
        })
        .then(
          () => {
            setSuccessMsg('Poruka je uspješno poslana.');
            form.reset();
          },
          (error) => {
            console.error('Error sending email:', error);
            form.setError('message', {
              type: 'manual',
              message: 'Došlo je do greške. Pokušajte ponovno.',
            });
          }
        );
    } catch (error) {
      console.error('Error sending email:', error);
      form.setError('message', {
        type: 'manual',
        message: 'Došlo je do greške s reCAPTCHA. Pokušajte ponovno.',
      });
    }
  }

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <CustomFormField
          name='name'
          label='Ime i Prezime'
          placeholder='Unesite ime i prezime'
        />
        <CustomFormField
          name='email'
          label='Email'
          placeholder='Unesite email'
        />
        <CustomFormField
          name='message'
          label='Poruka'
          placeholder='Unesite poruku'
          isTextArea
        />
        <Button
          type='submit'
          className='w-full bg-[#e08639] text-white rounded-lg'
          variant='outline'
          disabled={isSubmitting || !isReCaptchaLoaded}
        >
          Pošalji
        </Button>
        <FormMessage>
          {successMsg && (
            <p className='text-green-700 flex flex-row space-x-3 items-center'>
              <CircleCheck className='h-4 w-4 mr-2' /> {successMsg}
            </p>
          )}
        </FormMessage>
      </form>
    </Form>
  );
};
