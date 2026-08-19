'use client';
import { usePathname } from 'next/navigation';
import { getDictionary, getLocaleFromPathname } from '@/i18n/dictionaries';

export const WhatsAppFloatingButton = () => {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  return (
    <a
      href={dictionary.whatsapp.url}
      target='_blank'
      rel='noopener'
      aria-label={dictionary.whatsapp.ariaLabel}
      className='fixed bottom-5 right-5 z-[70] min-h-12 min-w-12 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#1fb857] flex items-center justify-center'
    >
      {dictionary.whatsapp.floatingLabel}
    </a>
  );
};
