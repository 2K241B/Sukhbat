import { Link } from 'react-router-dom';

import { LoadMore } from '../components/LoadMore.js';
import { Post } from '../components/Post.js';
import { useEffect, useState } from 'react';
import axios, { all } from 'axios';
const styles = {
  conatiner: 'flex flex-col items-center gap-8',
  textContainer:
    'flex flex-col w-[1216px] gap-8 text-[#495057] font-bold self-strech',
  header: 'font-bold text-2xl leading-7 text-[#181A2A]',
  tag: 'text-[#495057] text-sm font-bold leading-[25px] hover:text-[#D4A373] capitalize',
  postContainer: 'flex flex-wrap w-[1216px] gap-5',
  button:
    'py-3 px-5 items-center rounded-[6px] border-[#696A754D] border-[1px] mb-[80px]',
};

export const AllBlogPost = ({ postTag }) => {
  const [allPost, setAllPost] = useState([]);
  const AllBlogPostTag = allPost.map((el) => `${el.tag_list[0]}`);

  useEffect(() => {
    axios.get('https://dev.to/api/articles').then((response) => {
      setAllPost(response.data);
    });
  }, []);

  const [textColor, setTextColor] = useState(1);
  const [filteredData, setFilteredData] = useState(allPost);
  const Click = (i) => {
    setFilteredData(allPost);
    setFilteredData(
      allPost.filter((el) => el.tag_list[0] === AllBlogPostTag[i])
    );
    let Color = i + 1;
    setTextColor(Color);
  };
  return (
    <>
      <div className={styles.conatiner}>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>All Blog Post</h1>
          {postTag ? (
            <div className="flex cursor-pointer justify-between items-center text-center">
              <div className="flex flex-wrap gap-5 ">
                {postTag.map((el, i) => (
                  <p
                    className={`${styles.tag} [&:nth-child(${textColor})]:text-[#D4A373]`}
                    onClick={() => Click(i)}
                  >
                    {el.tag_list[0]}
                  </p>
                ))}
              </div>
              <Link to="/Blog" className={`text-right ${styles.tag}`}>
                <p>View All</p>
              </Link>
            </div>
          ) : null}
        </div>
        {postTag ? (
          <div className={styles.postContainer}>
            {filteredData.map((el, index) => (
              <Post
                key={index}
                img={el.social_image}
                tag={el.tag_list[0]}
                title={el.title}
                date={el.published_at}
              />
            ))}
          </div>
        ) : (
          <div className={styles.postContainer}>
            {allPost.map((el, index) => (
              <Post
                key={index}
                autorImg={el.user.profile_image}
                autorName={el.user.name}
                img={el.social_image}
                tag={el.tag_list[0]}
                title={el.title}
                date={el.published_at}
              />
            ))}
          </div>
        )}
      </div>
      {postTag ? <LoadMore /> : <></>}
    </>
  );
};
