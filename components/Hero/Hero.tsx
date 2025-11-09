import { useTranslations } from 'next-intl';
import css from './Hero.module.css';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className={css.hero}>
      <div className={css.content}>
        <div className={css.titleBlock}>
          <h1 className={css.title}>
            <span className={css.span}>{t('title')}</span>
            {t('subtitle')}
          </h1>
          <p className={css.subtitle}>{t('titleText')}</p>
        </div>
        <button className={css.button}>{t('button')}</button>
      </div>
    </section>
  );
}
