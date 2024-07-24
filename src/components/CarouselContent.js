import { Link } from 'react-router-dom';
import { Tag } from './Tag';

export const CarouselContent = ({ img, tag, title, date }) => {
  const carouselStyles = {
    container:
      'min-w-[1200px] min-h-[600px] relative flex flex-col justify-end bg-[#141624] bg-opacity-40 rounded-xl',
    img: 'absolute w-[1200px] h-[600px] top-0 left-0 -z-10 rounded-[12px] bg-no-repeat object-center object-cover',
    content:
      'p-10 border-solid border-[1px] border-[#E8E8EA] max-w-[598px] bg-white rounded-xl ml-[11px] mb-[13px]',
    button:
      'bg-[#4B6BFB] px-2.5 py-1 text-sm text-white rounded-[6px] w-fit mb-4 font-medium',
    title: 'text-[36px] font-semibold leading-[40px] text-[#181A2A] pt-4 pb-6',
    date: 'leading-6 text-[#97989F]',
  };
  return (
    <div className={carouselStyles.container}>
      <img src={img} alt={img} className={carouselStyles.img}></img>
      <Link to="/BlogPost">
        <div className={carouselStyles.content}>
          <Tag tag={tag} />
          <h1 className={carouselStyles.title}>{title}</h1>
          <p className={carouselStyles.date}>{date}</p>
        </div>
      </Link>
    </div>
  );
};
