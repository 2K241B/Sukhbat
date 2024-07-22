import { Link } from 'react-router-dom';
import { AllBlogContent, AllBlogPostTag } from '../constants.js/index.js';
import { LoadMore } from './LoadMore.js';
import { Post } from './Post.js';
const styles = {
  conatiner: 'flex flex-col items-center gap-8',
  textContainer:
    'flex flex-col w-[1216px] gap-8 text-[#495057] font-bold self-strech',
  header: 'font-bold text-2xl leading-7 text-[#181A2A]',
  tag: 'text-[#495057] text-xs font-bold leading-6 hover:text-[#D4A373]',
  postContainer: 'flex flex-wrap w-[1216px] gap-5',
  button:
    'py-3 px-5 items-center rounded-[6px] border-[#696A754D] border-[1px] mb-[80px]',
};

export const AllBlogPost = ({ postTag }) => {
  const Click = () => {
    console.log('kk');
  };

  return (
    <div className={styles.conatiner}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}>All Blog Post</h1>
        {postTag ? (
          <div className="flex cursor-pointer justify-between items-center text-center">
            <div className="flex  gap-5 ">
              {postTag.map((el) => (
                <p className={styles.tag} onClick={Click}>
                  {el}
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
          {AllBlogContent.map((el, index) => (
            <Post
              key={index}
              img={el.img}
              tag={el.tag}
              title={el.title}
              date={el.date}
            />
          ))}
        </div>
      ) : (
        <div className={styles.postContainer}>
          {AllBlogContent.map((el, index) => (
            <Post
              key={index}
              autorImg="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              autorName="Hello World"
              img={el.img}
              tag={el.tag}
              title={el.title}
              date={el.date}
            />
          ))}
        </div>
      )}
      {postTag ? <LoadMore /> : <></>}
    </div>
  );
};
