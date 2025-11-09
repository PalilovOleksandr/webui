import styles from './Advantages.module.css';
import Image from 'next/image';
import advantageImg from '@/public/images/advantages.jpg';
import { useTranslations } from 'next-intl';

export default function Advantages() {
  const t = useTranslations('advantages');

  return (
    <section className={styles.advantages}>
      <div className={styles.darkBlock}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('title')}</h2>
          <div className={styles.content}>
            <ul className={styles.list}>
              <li>{t('li1')}</li>
              <li>{t('li2')}</li>
              <li>{t('li3')}</li>
              <li>{t('li4')}</li>
              <li>{t('li5')}</li>
              <li>{t('li6')}</li>
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
