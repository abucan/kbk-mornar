'use client';
import { z } from 'zod';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { CircleCheck } from 'lucide-react';
import { Form, FormMessage } from './ui/form';
import { CustomFormField } from './form-field';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { useI18n } from './providers/i18n-provider';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const SEND_TO_FORM_SUCCESS = 'AW-18303407803/epX5CJ6P3eMcELut35dE';

export const SendEmailForm = () => {
  const { dictionary } = useI18n();
  const formSchema = z.object({
    name: z.string().min(2, {
      message: dictionary.form.validation.name,
    }),
    email: z.string().min(2, {
      message: dictionary.form.validation.email,
    }),
    message: z.string().min(2, {
      message: dictionary.form.validation.message,
    }),
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

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

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (!recaptchaToken) {
        form.setError('message', {
          type: 'manual',
          message: dictionary.form.validation.recaptcha,
        });
        return;
      }

      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: 'KBK Mornar Split',
        message: values.message,
        'g-recaptcha-response': recaptchaToken,
      };

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      window.gtag?.('event', 'conversion', {
        send_to: SEND_TO_FORM_SUCCESS,
        transport_type: 'beacon',
      });

      setSuccessMsg(dictionary.form.validation.success);
      form.reset();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (error) {
      console.error(error);
      form.setError('message', {
        type: 'manual',
        message: dictionary.form.validation.failed,
      });
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }
  }

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <CustomFormField
          name='name'
          label={dictionary.form.labels.name}
          placeholder={dictionary.form.placeholders.name}
        />
        <CustomFormField
          name='email'
          label={dictionary.form.labels.email}
          placeholder={dictionary.form.placeholders.email}
        />
        <CustomFormField
          name='message'
          label={dictionary.form.labels.message}
          placeholder={dictionary.form.placeholders.message}
          isTextArea
        />
        <div className='flex justify-center'>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey}
            onChange={handleRecaptchaChange}
          />
        </div>
        <Button
          type='submit'
          className='w-full bg-[#e08639] text-white rounded-lg'
          variant='outline'
          disabled={isSubmitting || !recaptchaToken}
        >
          {dictionary.form.labels.send}
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
