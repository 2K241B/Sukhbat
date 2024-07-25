import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AllBlogContent } from '../constants.js';
import { useState } from 'react';
import { CarouselContent } from './CarouselContent.js';
const styles = {
  section: 'max-w-[1200px] overflow-hidden',
  sliderContainer: ' flex transition-transform duration-500 ease-out',
  buttonContainer: 'flex gap-[9px] mt-[11px] justify-end',
  button:
    'size-10 rounded-md border-[1px] border-solid border-[#696A75] flex items-center justify-center',
};
export const Carousel = ({ Content }) => {
  const [current, setCurrent] = useState(0);
  const leftClick = () => {
    if (current > 0) {
      setCurrent(current === AllBlogContent.length - 1 ? 0 : current - 1);
    }
  };
  const rightClick = () => {
    if (current < AllBlogContent.length - 1) {
      setCurrent(current === AllBlogContent.length - 1 ? 0 : current + 1);
    }
  };
  return (
    <div className={styles.section}>
      <div
        className={styles.sliderContainer}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {Content.map((el) => (
          <CarouselContent
            img={el.img}
            tag={el.tag}
            title={el.title}
            date={el.date}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <ChevronLeft strokeWidth={1} size={30} onClick={leftClick} />
        </button>
        <button className={styles.button}>
          <ChevronRight strokeWidth={1} size={30} onClick={rightClick} />
        </button>
      </div>
    </div>
  );
};
