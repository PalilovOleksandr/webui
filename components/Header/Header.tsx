import Link from 'next/link';
import css from './Header.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/">
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
      <nav className={css.navigation}>
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
      </nav>
      <p className={css.lang}>UA</p>
    </header>
  );
};

export default Header;
