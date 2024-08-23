import CheckboxRecord from './CheckboxRecord';

const content = ['All', 'Income', 'Expense'];

export const MenuCheckbox = ({ setTypeValue }) => {
  const handlerClick = (name) => {
    setTypeValue(name);
  };
  return (
    <div className="flex flex-col gap-2">
      {content.map((el) => (
        <CheckboxRecord onClick={() => handlerClick(el)} id={el} content={el} />
      ))}
    </div>
  );
};

export default MenuCheckbox;
