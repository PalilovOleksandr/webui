import css from './FAQ.module.css';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import alimonyServiceImg from '@/public/images/AlimonyService.jpg';

import Image from 'next/image';

const FAQ = () => {
  return (
    <section>
      <h3></h3>
      <div>
        <div className={css.imageWrapper}>
          <Image
            src={alimonyServiceImg}
            alt="Alimony service photo"
            width={244}
            height={310}
            className={css.image}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
