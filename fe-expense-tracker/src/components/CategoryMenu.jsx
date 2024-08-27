import { Style } from '@/components/Constants';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Slider } from '@/components/ui/slider';
import { MenuCheckbox, AddCategory, RecordAlertDialog } from '@/components';
import { useEffect, useState } from 'react';
import { Eye, Leading } from './icon';
import { Button } from './ui/button';
import { PlusIcon } from 'lucide-react';
import { Input } from './ui/input';

export const CategoryMenu = ({
  categories,
  setCategoryValue,
  setTypeValue,
  typeValue,
}) => {
  const [sortedCategories, setSortedCategories] = useState();
  const [onChangeValue, setOnChangeValue] = useState(200000);

  useEffect(() => {
    const sort = _.orderBy(categories, [(category) => category.name], ['asc']);
    setSortedCategories(sort);
  }, []);

  const handlerClick = (name) => {
    setCategoryValue(name);
  };
  return (
    <Command className="w-[350px] h-fit border-[#E5E7EB] bg-[#F9FAFB] border-[1px] rounded-[12px] px-4 py-6 flex gap-6 ">
      <h1 className="text-[24px] font-semibold text-[#0F172A]">Records</h1>
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
              <div className="flex items-center cursor-pointer justify-between hover:bg-[#E5E7EB] rounded-sm px-1 py-1">
                <div className="flex items-center ">
                  <Eye />
                  <p className="px-3 py-1" onClick={() => handlerClick(el.id)}>
                    {el.name}
                  </p>
                </div>
                <Leading />
              </div>
            ))}
          <AddCategory />
        </CommandGroup>
        <CommandGroup heading="Amount Range">
          <div className="flex gap-3 pb-3">
            <Input
              className="bg-[#F3F4F6] border-[#D1D5DB] text-[#0F172A] outline-none"
              defaultValue="0"
              type="number"
            />
            <Input
              className="bg-[#F3F4F6] border-[#D1D5DB] text-[#0F172A] outline-none"
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
          <div className="flex justify-between px-1.5 text-[16px] leading-6">
            <p>0</p>
            <p>{onChangeValue}</p>
          </div>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CategoryMenu;
