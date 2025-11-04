import css from './Hero.module.css';

export default function HeroSection() {
  return (
    <section className={css.hero}>
      <div className={css.content}>
        <div className={css.titleBlock}>
          <h1 className={css.title}>
            <span className={css.span}>Розірвання</span>
            шлюбу під ключ
          </h1>
          <p className={css.subtitle}>
            Почніть нове життя — ми подбаємо про решту.
          </p>
        </div>
        <button className={css.button}>Подати заявку</button>
      </div>
    </section>
  );
}
