import { useEffect, useMemo, useState } from 'react';
import CheckboxList from './CheckboxList';
import CheckboxRecord from './CheckboxRecord';
import { icons } from './CategorySelect';
import sortBy from 'lodash/sortBy';

const styles = {
  container: 'flex flex-col gap-6',
  selectAllContainer:
    'w-full h-fit py-3 px-6 rounded-[12px] border-[1px] flex items-center justify-between bg-white',
  selectAllAmount: 'font-semibold text-primary opacity-[0.6]',
  recordContentContainer: 'flex items-center gap-4',
  iconBg: 'size-10 rounded-full bg-[#0166FF] flex justify-center items-center',
  textContainer: 'flex flex-col gap-1',
  recordName: 'text-[#000] font-semibold ',
  recordDate: 'text-[12px] leading-4 text-[#6B7280]',
  contentContainer: 'flex flex-col gap-3',
};

const dateToTime = (d) => {
  const date = new Date(d);
  const gettime = (date.getHours() < 10 ? '0' : '') + date.getHours();
  const getMunites = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  const getDate = (date.getDate() < 10 ? '0' : '') + date.getDate();
  const getMonth = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
  const getYear = (date.getFullYear() < 10 ? '0' : '') + date.getFullYear();
  return [`${gettime}:${getMunites} - ${getMonth}-${getDate}-${getYear}`];
};

export const RecordDateList = ({
  recordData,
  currency,
  transType,
  categoryValue,
  typeValue,
  sortingValues,
}) => {
  const total = (name) => {
    setTotalAmount(name.reduce((acc, el) => (acc += el.amount), 0));
  };
  const [totalAmount, setTotalAmount] = useState(0);

  const filteredArray = useMemo(() => {
    const filterdata =
      sortingValues === 'newest' ? recordData : sortBy(recordData, 'createdat');

    const filterByType = filterdata.filter((record) =>
      typeValue == 'ALL' ? recordData : record.transaction_type == typeValue
    );
    return filterByType.filter((record) =>
      !categoryValue ? filterByType : record.category_id == categoryValue
    );
  }, [typeValue, categoryValue]);

  useEffect(() => {
    total(filteredArray);
  }, [typeValue, categoryValue]);

  return (
    <div className={styles.container}>
      <div className={styles.selectAllContainer}>
        <CheckboxRecord
          id={'selectAll'}
          content={'Select All'}
          currency={currency}
        />
        <p className={styles.selectAllAmount}>
          {totalAmount}
          {currency && currency == 'USD' ? '$' : '₮'}
        </p>
      </div>
      <div className={styles.contentContainer}>
        {filteredArray &&
          filteredArray.map((el) => (
            <CheckboxList
              id={'select'}
              content={
                <div className={styles.recordContentContainer}>
                  <div className={styles.iconBg}>{icons[el.categoryimage]}</div>
                  <div className={styles.textContainer}>
                    <h1 className={styles.recordName}>{el.name}</h1>
                    <p className={styles.recordDate}>
                      {dateToTime(el.createdat)}
                    </p>
                  </div>
                </div>
              }
              transType={el.transaction_type}
              amount={el.amount}
              currency={currency}
            />
          ))}
      </div>
    </div>
  );
};

export default RecordDateList;
