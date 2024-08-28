import { Style } from '@/components/Constants';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandList,
} from '@/components/ui/command';
import { Slider } from '@/components/ui/slider';
import { MenuCheckbox, AddCategory, RecordAlertDialog } from '@/components';
import { useEffect, useState } from 'react';
import { Eye, Leading } from './icon';
import { Input } from './ui/input';
import groupBy from 'lodash/groupBy';

const styles = {
  commandContainer:
    'w-[350px] h-fit border-[#E5E7EB] bg-[#F9FAFB] border-[1px] rounded-[12px] px-4 py-6 flex gap-6 ',
  header: 'text-[24px] font-semibold text-[#0F172A]',
  contentContainer:
    'flex items-center cursor-pointer justify-between hover:bg-[#E5E7EB] rounded-sm px-1 py-1',
  sliderInputContainer: 'flex gap-3 pb-3',
  sliderInput: 'bg-[#F3F4F6] border-[#D1D5DB] text-[#0F172A] outline-none',
  SliderTextContainer: 'flex justify-between px-1.5 text-[16px] leading-6',
};

export const CategoryMenu = ({
  categories,
  setCategoryValue,
  setTypeValue,
  typeValue,
  recordData,
}) => {
  const [sortedCategories, setSortedCategories] = useState();
  const [onChangeValue, setOnChangeValue] = useState(200000);

  useEffect(() => {
    const records = groupBy(recordData, 'category_id');
    const category = Object.keys(records)
      .map((e) => {
        return categories.filter((rec) => rec.id == e);
      })
      .flat();
    setSortedCategories(category);
  }, []);

  const handlerClick = (name) => {
    setCategoryValue(name);
  };

  return (
    <Command className={styles.commandContainer}>
      <h1 className={styles.header}>Records</h1>
      <RecordAlertDialog isButtonName={'Add'} />
      <div className={Style.buttonStyle3}>
        <CommandInput placeholder="Search" />
      </div>
      <CommandList>
        <CommandGroup heading="Types">
          <MenuCheckbox setTypeValue={setTypeValue} typeValue={typeValue} />
        </CommandGroup>
        <CommandGroup heading="Category">
          {sortedCategories &&
            sortedCategories.map((el) => (
              <div
                onClick={() => handlerClick(el.id)}
                className={styles.contentContainer}
              >
                <div className="flex items-center ">
                  <Eye />
                  <p className="px-3 py-1">{el.name}</p>
                </div>
                <Leading />
              </div>
            ))}
          <AddCategory />
        </CommandGroup>
        <CommandGroup heading="Amount Range">
          <div className={styles.sliderInputContainer}>
            <Input
              className={styles.sliderInput}
              defaultValue="0"
              type="number"
            />
            <Input
              className={styles.sliderInput}
              defaultValue={onChangeValue}
              value={onChangeValue}
              onChange={(e) => setOnChangeValue(e.target.value)}
              type="number"
            />
          </div>
          <Slider
            onValueChange={(e) => setOnChangeValue(e)}
            defaultValue={[onChangeValue]}
            max={500000}
            step={1}
          />
          <div className={styles.SliderTextContainer}>
            <p>0</p>
            <p>{onChangeValue}</p>
          </div>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CategoryMenu;
