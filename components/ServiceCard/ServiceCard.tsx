import Image from 'next/image';
import serviceCardImg from '@/public/images/serviceCard.jpg';
import css from './ServiceCard.module.css';
import { useTranslations } from 'next-intl';

const ServiceCard = () => {
  const t = useTranslations('serviceCard');

  return (
    <section className={css.section}>
      <div className={css.imageWrapper}>
        <Image
          src={serviceCardImg}
          alt="Photo service card"
          width={390}
          height={501}
        />
      </div>
      <div className={css.content}>
        <h3 className={css.title}>
          {t('title')} <br /> {t('subtitle')}
        </h3>
        <span className={css.price}>{t('price')}</span>
        <p className={css.text}>
          {t('text')} <br /> {t('subtext')}
        </p>
      </div>
    </section>
  );
};

export default ServiceCard;
