export const LoadMore = ({ onclick, text }) => {
  const style = {
    button:
      'py-3 px-5 items-center rounded-[6px] border-[#696A754D] border-[1px] cursor-pointer hover:font-medium hover:shadow-md',
  };
  return (
    <div onClick={onclick}>
      <button className={style.button}>{text}</button>
    </div>
  );
};
