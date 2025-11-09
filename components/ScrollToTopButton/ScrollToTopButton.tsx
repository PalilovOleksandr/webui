'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import css from './ScrollToTopButton.module.css';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${css.button} ${isVisible ? css.visible : ''}`}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
}
