import Image from 'next/image';
import css from './PriceDetails.module.css';
import priceDetailsImg from '@/public/images/PriceDetails.jpg';

const PriceDetails = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.header}>
          <h4 className={css.title}>ЩО ВКЛЮЧЕНО У ВАРТІСТЬ 9000 ГРН?</h4>
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
              <li>Підготовка документів до суду</li>
              <li>Подача документів до суду</li>
              <li>Судовий збір 1211,20 грн</li>
              <li>Контроль справи</li>
              <li>
                Інформування клієнта про рух справи у суді на кожному етапі
              </li>
              <li>Представництво у суді</li>
              <li>Отримання рішення</li>
              <li>Відправлення клієнту рішення суду.</li>
            </ol>
            <p className={css.comment}>
              Процес розлучення завершено після того, як клієнт отримав рішення
              суду.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceDetails;
