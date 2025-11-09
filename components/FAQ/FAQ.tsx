'use client';

import { useState } from 'react';
import css from './FAQ.module.css';
import { AiOutlineDown } from 'react-icons/ai';
import { BsChevronDoubleDown } from 'react-icons/bs';
import Image from 'next/image';
import FaqImg from '@/public/images/FAQ.jpg';
import { useMessages, useTranslations } from 'next-intl';

interface FAQList {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const t = useTranslations('faq');
  const messages = useMessages();
  const faqs = messages.faq.faqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h3 className={css.title}>
          {t('title')}
          <span className={css.bottomWord}>{t('subtitle')}</span>
        </h3>
        <div className={css.content}>
          <div className={css.imageWrapper}>
            <Image
              src={FaqImg}
              alt="FAQ service photo"
              width={243}
              height={310}
              className={css.image}
            />
          </div>
          <div className={css.listContainer}>
            <ul className={css.faqList}>
              {faqs.map((faq: FAQList, index: number) => (
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
              {t('text')}
              <BsChevronDoubleDown className={css.moreIcon} size={55} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
