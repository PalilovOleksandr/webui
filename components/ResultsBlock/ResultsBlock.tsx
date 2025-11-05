import css from './ResultsBlock.module.css';
import { GoArrowUpRight } from 'react-icons/go';

const ResultsBlock = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h3 className={css.title}>Ви отримаєте:</h3>
        <ul className={css.list}>
          <li>
            <span className={css.iconWrapper}>
              <GoArrowUpRight />
            </span>
            Підготовку всіх документів
          </li>
          <li>
            <span className={css.iconWrapper}>
              <GoArrowUpRight />
            </span>
            ⁠Безкоштовну консультацію
          </li>
          <li>
            <span className={css.iconWrapper}>
              <GoArrowUpRight />
            </span>
            Онлайн-формат — без <br /> відвідувань суду чи офісу
          </li>
          <li>
            <span className={css.iconWrapper}>
              <GoArrowUpRight />
            </span>
            ⁠Представництво у суді
          </li>
          <li>
            <span className={css.iconWrapper}>
              <GoArrowUpRight />
            </span>
            100% результат
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ResultsBlock;
