import { Card } from './Card';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const styles = {
  container:
    'flex flex-col gap-[30px] items-start w-[1231px] hover:cursor-pointer',
  header: 'text-2xl font-bold text-[#181A2A]',
  cardContainer: 'flex flex-row gap-5 text-[#ffffff]',
};

export const Trending = ({ Content }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://dev.to/api/articles').then((response) => {
      setData(response.data);
    });
  }, []);
  const handlePostClick = (id) => {
    navigate(`/Post/${id}`);
  };
  const CardContent = data.slice(15, 19);
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
