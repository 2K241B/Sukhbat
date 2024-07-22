const styles = {
  primary:
    'px-[10px] py-1 rounded-md  w-fit  text-[12px] bg-[#4B6BFB] text-white',
  secondary:
    'px-[10px] py-1 rounded-md  w-fit  text-[12px] text-[#4B6BFB] bg-[rgba(75,107,251,0.05)]',
};

export const Tag = ({ tag, isPrimary = true }) => {
  return (
    <div className={isPrimary ? styles.primary : styles.secondary}>{tag}</div>
  );
};
