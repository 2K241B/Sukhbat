import CheckboxList from './CheckboxList';
import CheckboxRecord from './CheckboxRecord';
import ListLogo from './icon/ListLogo';

export const RecordDateList = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full h-fit py-3 px-6 rounded-[12px] border-[1px] flex items-center justify-between bg-white">
        <CheckboxRecord id={'selectAll'} content={'Select All'} />
        <p>-35000</p>
      </div>
      <CheckboxList
        title={'Today'}
        id={'bla'}
        content={
          <div className="flex items-center gap-4">
            <ListLogo />
            <div className="flex flex-col gap-1">
              <h1 className="text-[#000] font-semibold ">{'blabla'}</h1>
              <p className="text-[12px] leading-4 text-[#6B7280]">
                {'bla'} hours Ago
              </p>
            </div>
          </div>
        }
        amount={10000}
      />
    </div>
  );
};

export default RecordDateList;
