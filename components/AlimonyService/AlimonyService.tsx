import Image from 'next/image';
import css from './AlimonyService.module.css';
import alimonyServiceImg from '@/public/images/AlimonyService.jpg';
import { useTranslations } from 'next-intl';

const AlimonyService = () => {
  const t = useTranslations('alimony');

  return (
    <section className={css.section}>
      <h5 className={css.title}>{t('title')}</h5>
      <div className={css.content}>
        <div className={css.imageWrapper}>
          <Image
            src={alimonyServiceImg}
            alt="Alimony service photo"
            width={275}
            height={293}
            className={css.image}
          />
        </div>
        <ul className={css.list}>
          <li>{t('li1')}</li>
          <li>{t('li2')}</li>
          <li>{t('li3')}</li>
          <li>{t('li4')}</li>
          <li>{t('li5')}</li>
          <li>{t('li6')}</li>
        </ul>
      </div>
    </section>
  );
};

export default AlimonyService;
