import Image from 'next/image';
import css from './AlimonyService.module.css';
import alimonyServiceImg from '@/public/images/AlimonyService.jpg';

const AlimonyService = () => {
  return (
    <section className={css.section}>
      <h5 className={css.title}>
        Послуга аліменти під ключ розрахована для тих, хто:
      </h5>
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
          <li>Перебуває за кордоном</li>
          <li>
            Втратив документи (свідоцтво про шлюб, свідоцтво про народження
            дітей)
          </li>
          <li>Не знає місце проживання іншого з подружжя</li>
          <li>⁠Одружений з іноземцем</li>
          <li>Не хоче або не має змоги особисто займатись справою</li>
          <li>Один з подружжя мешкає на окупованій території</li>
        </ul>
      </div>
    </section>
  );
};

export default AlimonyService;
