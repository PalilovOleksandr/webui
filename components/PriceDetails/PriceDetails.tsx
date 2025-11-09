import Image from 'next/image';
import css from './PriceDetails.module.css';
import priceDetailsImg from '@/public/images/PriceDetails.jpg';
import { useTranslations } from 'next-intl';

const PriceDetails = () => {
  const t = useTranslations('priceDetails');

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.header}>
          <h4 className={css.title}>{t('title')}</h4>
          <div className={css.line}></div>
        </div>
        <div className={css.mainContent}>
          <div className={css.imageWrapper}>
            <Image
              src={priceDetailsImg}
              alt="Price details photo"
              width={303}
              height={454}
              className={css.image}
            />
          </div>
          <div className={css.textBlock}>
            <ol className={css.list}>
              <li>{t('li1')}</li>
              <li>{t('li2')}</li>
              <li>{t('li3')}</li>
              <li>{t('li4')}</li>
              <li>{t('li5')}</li>
              <li>{t('li6')}</li>
              <li>{t('li7')}</li>
              <li>{t('li8')}</li>
            </ol>
            <p className={css.comment}>{t('text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceDetails;
