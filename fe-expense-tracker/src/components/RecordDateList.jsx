import { useEffect, useMemo, useState } from 'react';
import CheckboxList from './CheckboxList';
import CheckboxRecord from './CheckboxRecord';
import ListLogo from './icon/ListLogo';

export const RecordDateList = ({
  recordData,
  currency,
  transType,
  categoryValue,
  typeValue,
  sortingValues,
}) => {
  const dateToTime = (d) => {
    const date = new Date(d);
    const gettime = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const getMunites = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const getDate = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const getMonth = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
    const getYear = (date.getFullYear() < 10 ? '0' : '') + date.getFullYear();
    return [`${gettime}:${getMunites} - ${getMonth}-${getDate}-${getYear}`];
  };
  const total = (name) => {
    setTotalAmount(name.reduce((acc, el) => (acc += el.amount), 0));
  };

  const [totalAmount, setTotalAmount] = useState(0);

  const filteredArray = useMemo(() => {
    const filterdata =
      sortingValues === 'newest'
        ? recordData
        : _.sortBy(recordData, 'createdat');

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
    <div className="flex flex-col gap-6">
      <div className="w-full h-fit py-3 px-6 rounded-[12px] border-[1px] flex items-center justify-between bg-white">
        <CheckboxRecord
          id={'selectAll'}
          content={'Select All'}
          currency={currency}
        />
        <p className="font-semibold text-primary opacity-[0.6]">
          {totalAmount}
          {currency && currency == 'USD' ? '$' : '₮'}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {filteredArray &&
          filteredArray.map((el) => (
            <CheckboxList
              id={'bla'}
              content={
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-[#0166FF]"></div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#000] font-semibold ">{el.name}</h1>
                    <p className="text-[12px] leading-4 text-[#6B7280]">
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
