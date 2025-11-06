import Link from 'next/link';
import css from './Footer.module.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaViber } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.logoWrapper}>
        <Link href="/" className={css.logoWrapper}>
          <svg className={css.svg}>
            <use href="/sprite.svg#logo"></use>
          </svg>
        </Link>
        <p className={css.textLogo}>
          Прості онлайн-розлучення без судової тяганини.{' '}
        </p>
      </div>
      <div className={css.socialMedia}>
        <ul className={css.serviceList}>
          <li>
            <Link href="/">Аліменти</Link>
          </li>
          <li>
            <Link href="/">Розлучення</Link>
          </li>
          <li>
            <Link href="/">Блог</Link>
          </li>
        </ul>
        <ul className={css.iconList}>
          <li>
            <span className={css.iconWrapper}>
              <FaTelegramPlane />
            </span>
          </li>
          <li>
            <span className={css.iconWrapper}>
              <FaViber />
            </span>
          </li>
          <li>
            <span className={css.iconWrapper}>
              <FaWhatsapp />
            </span>
          </li>
          <li>
            <span className={css.iconWrapper}>
              <FaFacebookF />
            </span>
          </li>
        </ul>
      </div>
      <address></address>
    </footer>
  );
};

export default Footer;
