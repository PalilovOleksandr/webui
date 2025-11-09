'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import css from './LocalSwitcher.module.css';

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    console.log(pathname);
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  return (
    <select
      value={locale}
      className={css.langList}
      onChange={e => switchLocale(e.target.value)}
    >
      <option value="uk">UK</option>
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  );
};
