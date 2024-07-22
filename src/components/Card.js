import { Tag } from './Tag';

export const Card = ({ image, tag, title }) => {
  const styles = {
    container:
      'max-w-[293px] h-[320px] rounded-xl flex flex-col justify-end gap-4 p-8 bg-center bg-cover relative',
    title: 'font-semibold text-lg text-[#ffffff] leading-7',
    content: 'z-10 flex w-[230px] h-[120px] flex-col items-start gap-4',
  };

  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className={styles.container}
    >
      <div className="w-full h-full bg-[#00000040] rounded-xl absolute top-0 left-0"></div>
      <div className={styles.content}>
        <Tag tag={tag} />
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};
