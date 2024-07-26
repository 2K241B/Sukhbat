import { Tag } from './Tag';
const styles = {
  container:
    'w-[392px] flex p-4 flex-col justify-between items-center gap-4 border-[1px] border-[#E8E8EA] rounded-xl cursor-pointer',
  img: 'w-[360px] h-[240px] object-cover object-center rounded-md',
  content: 'p-2 flex flex-col gap-4 self-stretch items-start',
  contentText: 'flex flex-col items-start gap-4 self-stretch',
  title: 'text-[#181A2A] font-semibold text-2xl leading-7',
  date: 'text-[#97989F] text-base font-normal leading-6',
  autorimg: 'size-9 rounded-full object-cover object-center',
  autorName: 'text-base font-medium leading-6 text-[#97989F]',
};

export const Post = ({
  img,
  tag,
  title,
  date,
  autorImg,
  autorName,
  onClick,
}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={`${img}`} alt={`${img}`} className={styles.img}></img>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <Tag tag={tag} isPrimary={false} />
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className="flex items-center gap-5 ">
          {autorImg ? (
            <div className=" flex items-center gap-3">
              <img
                src={autorImg}
                alt="AutorImg"
                className={styles.autorimg}
              ></img>
              <p className={styles.autorName}>{autorName}</p>
            </div>
          ) : null}
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};
