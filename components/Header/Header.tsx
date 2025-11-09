'use client';

import { useState } from 'react';
import css from './Header.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LocaleSwitcher } from '../LocalSwitcher/LocalSwitcher';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('header');
  const locale = useLocale();

  return (
    <header className={css.header}>
      <Link href="/" className={css.logoWrapper}>
        <svg className={css.svg}>
          <use href={`/sprite.svg#${locale}`}></use>
        </svg>
      </Link>
      <address className={css.address}>
        <FaPhone className={css.phone} />
        <Link href="tel:+0992465404" className={css.number}>
          (099) 246 54 04
        </Link>
      </address>
      <button
        className={css.burger}
        onClick={() => setMenuOpen(menuOpen => !menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
      </button>

      <nav className={`${css.navigation} ${menuOpen ? css.open : ''}`}>
        <ul className={css.navigationList}>
          <li>
            <Link href="/">
              {t('nav1')}
              <IoIosArrowDown className={css.arrow} />
            </Link>
          </li>
          <li>
            <Link href="/">
              {t('nav2')}
              <IoIosArrowDown className={css.arrow} />
            </Link>
          </li>
          <li>
            <Link href="/">{t('nav3')}</Link>
          </li>
          <li>
            <Link href="/about">{t('nav4')}</Link>
          </li>
          <li>
            <Link href="/">{t('nav5')}</Link>
          </li>
        </ul>
        <div className={css.localeWrapper}>
          <LocaleSwitcher />
        </div>
        <div className={css.mobileExtras}>
          <address className={css.addressMobile}>
            <FaPhone className={css.phone} />
            <Link href="tel: +0992465404" className={css.number}>
              (099) 246 54 04
            </Link>
          </address>
          <p className={css.langMobile}>
            <LocaleSwitcher />
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
