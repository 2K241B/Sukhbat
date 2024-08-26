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
import { MenuCheckbox, AddCategory } from '@/components';
import { useEffect, useState } from 'react';
import { Eye, Leading } from './icon';
import { Button } from './ui/button';
import { PlusIcon } from 'lucide-react';
import { Input } from './ui/input';

export const CategoryMenu = ({
  categories,
  setCategoryValue,
  setTypeValue,
}) => {
  const [sortedCategories, setSortedCategories] = useState();

  useEffect(() => {
    const sort = _.orderBy(categories, [(category) => category.name], ['asc']);
    setSortedCategories(sort);
  }, []);

  const handlerClick = (name) => {
    setCategoryValue(name);
  };
  return (
    <Command className="w-[350px] h-fit border-[#E5E7EB] border-[1px] rounded-[12px] px-4 py-6 flex gap-6 ">
      <h1>Records</h1>
      <AddCategory />
      <div className={Style.buttonStyle3}>
        <CommandInput placeholder="Search" />
      </div>
      <CommandList>
        <CommandGroup heading="Types">
          <MenuCheckbox setTypeValue={setTypeValue} />
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
          <Button className="bg-white text-[#1F2937] flex h-8 justify-center items-center gap-2 font-normal text-base p-0">
            <PlusIcon color="#0166FF" />
            Add Category
          </Button>
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
              defaultValue="1000"
              type="number"
            />
          </div>
          <Slider defaultValue={[400000]} max={1000000} step={1} />
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CategoryMenu;
