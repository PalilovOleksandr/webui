import { useTranslations } from 'next-intl';
import css from './ResultsBlock.module.css';
import { GoArrowUpRight } from 'react-icons/go';

const ResultsBlock = () => {
  const t = useTranslations('result');

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h3 className={css.title}>{t('title')}</h3>
        <ul className={css.list}>
          <li>
            <span className={css.iconWrapper}>
              <GoArrowUpRight />
            </span>
            {t('li1')}
          </li>
          <li>
            <span className={css.iconWrapper}>
              <GoArrowUpRight />
            </span>
            {t('li2')}
          </li>
          <li>
            <span className={css.iconWrapper}>
              <GoArrowUpRight />
            </span>
            {t('li3')}
          </li>
          <li>
            <span className={css.iconWrapper}>
              <GoArrowUpRight />
            </span>
            {t('li4')}
          </li>
          <li>
            <span className={css.iconWrapper}>
              <GoArrowUpRight />
            </span>
            {t('li5')}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ResultsBlock;
