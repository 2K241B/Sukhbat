import { sortBy } from 'lodash/sortBy';
import { useEffect, useState } from 'react';
import { icons } from './CategorySelect';

export const styles = {
  transTypeInc: 'text-[#84CC16] font-semibold leading-[24px]',
  transTypeExp: 'text-[#F54949] font-semibold leading-[24px]',
  listContainer:
    'flex justify-between items-center h-[40] py-[20px] mx-6 border-b-[1px] last:border-0',
};
export const RecordList = ({ recordData, currency }) => {
  const [sortedRecord, setSortedRecord] = useState([]);
  useEffect(() => {
    const sort = _.sortBy(recordData, ['createdat']);
    setSortedRecord(sort.reverse());
  }, []);

  const DiffHours = (time) => {
    const updateDate = time;
    let date1 = new Date();
    let date2 = new Date(updateDate);
    var diffHours = Math.floor(Math.abs(date1 - date2) / 36e5);
    return diffHours;
  };
  return (
    <div>
      {sortedRecord.map((el) => (
        <div className={styles.listContainer}>
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-full bg-[#0166FF] flex justify-center items-center">
              {icons[el.categoryimage]}
            </div>
            <div>
              <h1 className="text-[#000] font-semibold ">{el.name}</h1>
              <p className="text-[12px] leading-4 text-[#6B7280]">
                {DiffHours(el.createdat)} hours Ago
              </p>
            </div>
          </div>
          <p
            className={
              el.transaction_type == 'INC'
                ? styles.transTypeInc
                : styles.transTypeExp
            }
          >
            {el.transaction_type == 'INC' ? '+' : '-'}
            {el.amount}
            {currency == 'USD' ? '$' : '₮'}
          </p>
        </div>
      ))}
    </div>
  );
};
export default RecordList;
