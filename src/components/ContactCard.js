export const ContactCard = ({ title, desc }) => {
  const styles = {
    title: 'text-2xl font-semibold leading-10 ',
    desc: 'text-[#696A75] font-base font-normal leading-6 text-lg',
  };
  return (
    <div className=" flex w-[294px] h-[133px] p-4 flex-col items-start gap-[10px] border-[1px] border-[#E8E8EA] rounded-[12px]">
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};
