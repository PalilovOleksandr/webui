'use client';

import css from './Review.module.css';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalForm from '../ModalForm/ModalForm';
import { useTranslations } from 'next-intl';

const Review = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const t = useTranslations('review');

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <section id="review" className={css.section}>
      <div className={css.quoteSection}>
        <div className={css.quoteIcon}>
          <BiSolidQuoteLeft className={css.icon} />
        </div>
        <p className={css.quoteText}>{`"${t('text')}"`}</p>
        <div className={css.clientInfo}>
          <p>{t('info')}</p>
        </div>
      </div>
      <div className={css.imageSection}>
        <button className={css.contactButton} onClick={openModal}>
          {t('button')}
        </button>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalForm onClose={closeModal} />
        </Modal>
      )}
    </section>
  );
};

export default Review;
