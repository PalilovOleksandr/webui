'use client';

import Link from 'next/link';
import { useState } from 'react';
import css from './Header.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <Link href="/" className={css.logoWrapper}>
        <svg className={css.svg}>
          <use href="/sprite.svg#logo"></use>
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
              <p>Послуги</p>
              <IoIosArrowDown className={css.arrow} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>Популярні питання</p>
              <IoIosArrowDown className={css.arrow} />
            </Link>
          </li>
          <li>
            <Link href="/">Блог</Link>
          </li>
          <li>
            <Link href="/">Про нас</Link>
          </li>
          <li>
            <Link href="/">Контакти</Link>
          </li>
        </ul>
        <div className={css.mobileExtras}>
          <address className={css.addressMobile}>
            <FaPhone className={css.phone} />
            <Link href="tel:+0992465404" className={css.number}>
              (099) 246 54 04
            </Link>
          </address>
          <p className={css.langMobile}>UA</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
