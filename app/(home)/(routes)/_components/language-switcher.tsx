'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/components/providers/i18n-provider';
import { getLocalizedHref, getLocaleFromPathname } from '@/i18n/dictionaries';

const removeLocalePrefix = (pathname: string) => {
  if (pathname === '/en') {
    return '/';
  }

  return pathname.startsWith('/en/') ? pathname.replace('/en', '') : pathname;
};

export const LanguageSwitcher = ({
  onSwitch,
}: {
  onSwitch?: () => void;
}) => {
  const pathname = usePathname();
  const { dictionary } = useI18n();
  const currentLocale = getLocaleFromPathname(pathname);
  const basePath = removeLocalePrefix(pathname || '/');

  const hrHref = getLocalizedHref(basePath, 'hr');
  const enHref = getLocalizedHref(basePath, 'en');

  return (
    <li className='flex items-center gap-2'>
      <Link
        onClick={onSwitch}
        href={hrHref}
        className={`text-sm transition-colors ${
          currentLocale === 'hr' ? 'font-semibold text-[#e08639]' : 'text-gray-700'
        }`}
      >
        {dictionary.languageSwitcher.hr}
      </Link>
      <span className='text-gray-400'>/</span>
      <Link
        onClick={onSwitch}
        href={enHref}
        className={`text-sm transition-colors ${
          currentLocale === 'en' ? 'font-semibold text-[#e08639]' : 'text-gray-700'
        }`}
      >
        {dictionary.languageSwitcher.en}
      </Link>
    </li>
  );
};
