import styles from './Advantages.module.css';
import Image from 'next/image';
import advantageImg from '@/public/images/advantages.jpg';

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.darkBlock}>
        <div className={styles.container}>
          <h2 className={styles.title}>Наші переваги</h2>
          <div className={styles.content}>
            <ul className={styles.list}>
              <li>
                консультація безкоштовна телефон, вайбер, телеграм, вотсап.
              </li>
              <li>
                справу супруводжує адвокат з 20-річним досвідом у юридичній
                сфері, з яких 10 років - на посадді помічника судді. Це означає
                глибоке розуміння судової практики та процесів з середини.
              </li>
              <li>
                100 % виграних справ. Результат гарантуємо, в іншому випадку
                кошти будуть повернуто
              </li>
              <li>усе роблимо без вашої участі.</li>
              <li>Ідеальне рішення для тих, хто цінує свій час та спокій.</li>
              <li>5689 виграних справ</li>
            </ul>
            <div className={styles.imageWrapper}>
              <Image
                src={advantageImg}
                alt="law"
                className={styles.image}
                width={267}
                height={377}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
