'use client';

import { useState } from 'react';
import css from './FAQ.module.css';
import { AiOutlineDown } from 'react-icons/ai';
import Image from 'next/image';
import FaqImg from '@/public/images/AlimonyService.jpg';

const faqs = [
  {
    question: 'Які потрібні документи для розірвання шлюбу через суд?',
    answer:
      'Для розірвання шлюбу через суд потрібні: заява, свідоцтво про шлюб, копії паспортів та ідентифікаційних кодів подружжя.',
  },
  {
    question: 'Яка вартість судового збору?',
    answer:
      'Станом на 2025 рік судовий збір складає близько 0,4 розміру прожиткового мінімуму для працездатних осіб.',
  },
  {
    question: 'Скільки триває процес розірвання шлюбу через суд?',
    answer:
      'У середньому процес триває від 1 до 3 місяців залежно від завантаженості суду та обставин справи.',
  },
  {
    question: 'Які є варіанти розірвання шлюбу в Україні?',
    answer:
      'Існує два варіанти: через РАЦС (за згодою сторін без дітей) або через суд (за наявності дітей чи відсутності згоди).',
  },
  {
    question: 'Чи потрібно відвідувати суд?',
    answer:
      'У більшості випадків так, але можливо подати заяву про розгляд справи без вашої участі.',
  },
  {
    question: 'Чи потрібна згода іншого з подружжя?',
    answer:
      'Ні, шлюб можна розірвати навіть без згоди іншої сторони через суд.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>
          ПОШИРЕНІ
          <span className={css.bottomWord}>ЗАПИТАННЯ</span>
        </h2>
        <div className={css.content}>
          <div className={css.imageWrapper}>
            <Image
              src={FaqImg}
              alt="Alimony service photo"
              width={244}
              height={310}
              className={css.image}
            />
          </div>
          <div className={css.listContainer}>
            <ul className={css.faqList}>
              {faqs.map((faq, index) => (
                <li key={index} className={css.faqItem}>
                  <button
                    className={css.question}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <AiOutlineDown
                      className={`${css.icon} ${
                        openIndex === index ? css.iconActive : ''
                      }`}
                      size={18}
                    />
                  </button>
                  <div
                    className={`${css.answer} ${
                      openIndex === index ? css.answerOpen : ''
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button className={css.moreBtn}>
              БІЛЬШЕ <AiOutlineDown className={css.moreIcon} size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
