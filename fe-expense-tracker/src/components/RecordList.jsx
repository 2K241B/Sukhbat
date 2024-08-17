import ListLogo from '@/components/icon/ListLogo';
import { useEffect } from 'react';
const styles = {
  transTypeInc: 'text-[#84CC16] font-semibold leading-[24px]',
  transTypeExp: 'text-[#F54949] font-semibold leading-[24px]',
};
export const RecordList = ({ recordData, currency }) => {
  const DiffHours = (time) => {
    const updateDate = time;
    let date1 = new Date();
    let date2 = new Date(updateDate);
    console.log(date2, 'date2');
    console.log(date1, 'date1');
    var diffHours = Math.floor(Math.abs(date1 - date2) / 36e5);
    return diffHours;
  };

  return (
    <div>
      {recordData.map((el) => (
        <div className="flex justify-between items-center h-[40] py-[20px] mx-6 border-b-[1px] last:border-0">
          <div className="flex items-center gap-4">
            <ListLogo />
            <div>
              <h1 className="text-[#000] font-semibold ">{el.name}</h1>
              <p className="text-[12px] leading-4 text-[#6B7280]">
                {DiffHours(el.updatedat)} hours Ago
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
