import { Card } from './Card';
import { AllBlogContent, content } from '../constants.js';
import { Link } from 'react-router-dom';
const styles = {
  container: 'flex flex-col gap-[30px] items-start w-[1231px]',
  header: 'text-2xl font-bold text-[#181A2A]',
  cardContainer: 'flex flex-row gap-5 text-[#ffffff]',
};

export const Trending = () => {
  return (
    <Link to="/BlogPost" className={styles.container}>
      <h2 className={styles.header}>Trending</h2>
      <div className={styles.cardContainer}>
        {content.map((el, index) => (
          <Card
            image={AllBlogContent[index].img}
            tag={AllBlogContent[index].tag}
            title={AllBlogContent[index].title}
          />
        ))}
      </div>
    </Link>
  );
};
