import ListLogo from '@/components/icon/ListLogo';
export const RecordList = ({ recordData, currency }) => {
  return (
    <div>
      {recordData.map((el) => (
        <div className="flex justify-between items-center h-[40] py-[20px] mx-6 border-b-[1px] last:border-0">
          <div className="flex items-center gap-4">
            <ListLogo />
            <div>
              <h1>{el.name}</h1>
              <p>{el.updatedat}</p>
            </div>
          </div>
          <p>
            {el.amount}
            {currency == 'USD' ? '$' : '₮'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecordList;
