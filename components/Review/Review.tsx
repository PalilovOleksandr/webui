'use client';

import css from './Review.module.css';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalForm from '../ModalForm/ModalForm';

const Review = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <section className={css.section}>
      <div className={css.quoteSection}>
        <div className={css.quoteIcon}>
          <BiSolidQuoteLeft className={css.icon} />
        </div>
        <p className={css.quoteText}>
          {`          "Думала, що розлучення — це складно, але все виявилось набагато
          простіше. Заповнила анкету, отримала документи на пошту й навіть не
          ходила до суду. Аліменти теж оформили під ключ. Все швидко, ввічливо і
          без зайвого стресу. Дякую!"`}
        </p>
        <div className={css.clientInfo}>
          <p>Анна, 34 роки, Київ</p>
        </div>
      </div>
      <div className={css.imageSection}>
        <button className={css.contactButton} onClick={openModal}>
          ЗВ`ЯЗАТИСЬ
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
