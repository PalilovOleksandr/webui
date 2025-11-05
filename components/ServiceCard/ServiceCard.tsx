import Image from 'next/image';
import serviceCardImg from '@/public/images/serviceCard.jpg';
import css from './ServiceCard.module.css';

const ServiceCard = () => {
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
        <h2 className={css.title}>
          Розірвання <br /> шлюбу під ключ
        </h2>
        <span className={css.price}>лише 9000 грн</span>
        <p className={css.text}>
          Жодних прихованих <br /> платежів — лише прозора вартість
        </p>
      </div>
    </section>
  );
};

export default ServiceCard;
