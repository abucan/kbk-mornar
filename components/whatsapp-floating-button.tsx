'use client';

export const WhatsAppFloatingButton = () => {
  return (
    <a
      href='https://wa.me/385915401195'
      target='_blank'
      rel='noopener'
      aria-label='Kontakt putem WhatsAppa'
      className='fixed bottom-5 right-5 z-[70] min-h-12 min-w-12 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#1fb857] flex items-center justify-center'
    >
      WhatsApp
    </a>
  );
};
