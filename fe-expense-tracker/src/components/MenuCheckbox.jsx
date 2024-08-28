import CheckboxRecord from './CheckboxRecord';

const styles = { container: 'flex flex-col gap-3' };

const content = ['All', 'Income', 'Expense'];

export const MenuCheckbox = ({ setTypeValue, typeValue }) => {
  return (
    <div className={styles.container}>
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
