import { Card } from './Card';
import { useNavigate } from 'react-router-dom';
const styles = {
  container:
    'flex flex-col gap-[30px] items-start w-[1231px] hover:cursor-pointer',
  header: 'text-2xl font-bold text-[#181A2A]',
  cardContainer: 'flex flex-row gap-5 text-[#ffffff]',
};

export const Trending = ({ Content }) => {
  const navigate = useNavigate();
  const handlePostClick = (id) => {
    navigate(`/Post/${id}`);
  };
  const CardContent = Content.slice(10, 14);
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Trending</h2>
      <div className={styles.cardContainer}>
        {CardContent.map((el, index) => (
          <Card
            onClick={() => handlePostClick(el.id)}
            image={el.cover_image}
            tag={el.tag_list[0]}
            title={el.title}
          />
        ))}
      </div>
    </div>
  );
};
