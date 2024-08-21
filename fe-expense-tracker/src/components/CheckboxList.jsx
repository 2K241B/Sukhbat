import CheckboxRecord from './CheckboxRecord';

export const CheckboxList = ({ title, id, content, amount }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1>{title}</h1>
      <div className="w-full h-fit py-3 px-6 rounded-[12px] border-[1px] flex items-center justify-between bg-white">
        <CheckboxRecord id={id} content={content} />
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default CheckboxList;
