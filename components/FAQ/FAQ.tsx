import css from './FAQ.module.css';
import Image from 'next/image';
import FAQImg from '@/public/images/AlimonyService.jpg';
import { IoIosArrowDown } from 'react-icons/io';
import { RiArrowDownDoubleFill } from 'react-icons/ri';

const Review = () => {
  const faqItems = [
    'Які потрібні документи для розірвання шлюбу чарез суд?',
    'Яка вартість судового збору?',
    'Скільки триває процес розірвання шлюбу через суд?',
    'Які є варіанти розірвання шлюбу в Україні?',
    'Чи потрібно відвідувати суд?',
    'Чи потрібна згода іншого з подружжя?',
  ];

  return (
    <div className={css.faqContainer}>
      <div className={css.contentWrapper}>
        <div className={css.titleSection}>
          <h3 className={css.mainTitle}>
            <span className={css.titleWordLeft}>ПОШИРЕНІ</span>
            <span className={css.titleWordRight}>ЗАПИТАННЯ</span>
          </h3>
        </div>
        <div className={css.mainContent}>
          <div className={css.imageBlock}>
            <span className={css.verticalLine}></span>
            <div className={css.imageWrapper}>
              <Image
                src={FAQImg}
                alt="Люди за столом, обговорюють документи"
                width={244}
                height={310}
                className={css.image}
              />
            </div>
          </div>
          <div className={css.faqBlock}>
            {faqItems.map((item, index) => (
              <div key={index} className={css.faqItem}>
                <p className={css.faqQuestion}>{item}</p>
                <span className={css.arrowIcon}>
                  <IoIosArrowDown className={css.arrowIcon} />
                </span>
              </div>
            ))}
            <button className={css.moreButton}>
              БІЛЬШЕ
              <span className={css.arrowDown}>
                <RiArrowDownDoubleFill />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={css.bottomBar}></div>
    </div>
  );
};

export default Review;
