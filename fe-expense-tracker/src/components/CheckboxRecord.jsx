import { Checkbox } from '@/components/ui/checkbox';

export const CheckboxRecord = ({
  id,
  content,
  setTypeValue,
  typeValue,
  currency,
}) => {
  return (
    <div className="items-top flex space-x-2 items-center gap-2">
      <Checkbox
        onClick={() => setTypeValue && setTypeValue(id)}
        checked={typeValue && typeValue === id}
        id={id}
        className={
          currency
            ? 'border-[#E5E7EB] opacity: 0.2 rounded-sm size-6'
            : 'border-[#E5E7EB] opacity: 0.2 rounded-full'
        }
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#1F2937] text-[16px] font-normal"
        >
          {content}
        </label>
      </div>
    </div>
  );
};

export default CheckboxRecord;
