import Image from 'next/image';
import css from './BenefitsService.module.css';
import benefitsServiceImg from '@/public/images/benefitsService.jpg';
import { useTranslations } from 'next-intl';

const BenefitsService = () => {
  const t = useTranslations('benefits');

  return (
    <section className={css.section}>
      <div className={css.header}>
        <h4 className={css.title}>{t('title')}</h4>
        <div className={css.line}></div>
      </div>
      <div className={css.content}>
        <ol className={css.list}>
          <li>{t('li1')}</li>
          <li>{t('li2')}</li>
          <li>{t('li3')}</li>
          <li>{t('li4')}</li>
          <li>{t('li5')}</li>
        </ol>
        <div className={css.imageWrapper}>
          <Image
            src={benefitsServiceImg}
            alt="Benefits service image"
            width={489}
            height={293}
            className={css.image}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsService;
