import Image from 'next/image';
import css from './BenefitsService.module.css';
import benefitsServiceImg from '@/public/images/benefitsService.jpg';

const BenefitsService = () => {
  return (
    <section className={css.section}>
      <div className={css.header}>
        <h4 className={css.title}>Чому такий варіант підійде:</h4>
        <div className={css.line}></div>
      </div>
      <div className={css.content}>
        <ol className={css.list}>
          <li>
            Адвокат, веде справу до результату, а саме до позитивного рішення
            суду;
          </li>
          <li>Вартість фіксована 9000 грн;</li>
          <li>Усе робимо без Вашої участі;</li>
          <li>Підписуємо договір;</li>
          <li>Результат гарантуємо на 100%!</li>
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
