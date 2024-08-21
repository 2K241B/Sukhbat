import { useEffect, useState } from 'react';
import CheckboxList from './CheckboxList';
import CheckboxRecord from './CheckboxRecord';
import ListLogo from './icon/ListLogo';
import _ from 'lodash';

export const RecordDateList = ({ recordData, currency, transType }) => {
  const [sortedRecord, setSortedRecord] = useState();
  useEffect(() => {
    const mockData = [
      {
        balance: 10000,
        userId: 'user-3',
      },
      {
        balance: 20000,
        userId: 'user-2',
      },
      {
        balance: 30000,
        userId: 'user-1',
      },
      {
        balance: 40000,
        userId: 'user-3',
      },
      {
        balance: 50000,
        userId: 'user-2',
      },
      {
        balance: 60000,
        userId: 'user-1',
      },
    ];

    const group = _.groupBy(mockData, 'userId');
    console.log(group);

    console.log(avarage);

    // const sort = _.groupBy(recordData, 'createdat');
    // setSortedRecord(sort);
  }, []);
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full h-fit py-3 px-6 rounded-[12px] border-[1px] flex items-center justify-between bg-white">
        <CheckboxRecord id={'selectAll'} content={'Select All'} />
        <p>-35000</p>
      </div>
      <h1>Today</h1>
      <div className="flex flex-col gap-3">
        {recordData &&
          recordData.map((el) => (
            <CheckboxList
              id={'bla'}
              content={
                <div className="flex items-center gap-4">
                  <ListLogo />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#000] font-semibold ">{el.name}</h1>
                    <p className="text-[12px] leading-4 text-[#6B7280]">
                      {el.updateat} hours Ago
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
