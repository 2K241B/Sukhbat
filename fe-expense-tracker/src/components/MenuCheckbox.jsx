import CheckboxRecord from './CheckboxRecord';

const content = ['All', 'Income', 'Expense'];

export const MenuCheckbox = ({ setTypeValue, typeValue }) => {
  return (
    <div className="flex flex-col gap-3">
      {content.map((el) => (
        <CheckboxRecord
          typeValue={typeValue}
          setTypeValue={setTypeValue}
          id={el.slice(0, 3).toUpperCase()}
          content={el}
        />
      ))}
    </div>
  );
};

export default MenuCheckbox;
