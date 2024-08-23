import { Button } from '@/components/ui/button';
import { Style } from '@/components/Constants';
import { PlusIcon } from 'lucide-react';
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
import MenuCheckbox from './MenuCheckbox';
import { useEffect, useState } from 'react';
import Eye from './icon/Eye';
import Leading from './icon/Leading';
import AddCategory from './AddCategory';

export const CategoryMenu = ({ categories, setCategoryValue }) => {
  const [sortedCategories, setSortedCategories] = useState();
  const [typeValue, setTypeValue] = useState();
  useEffect(() => {
    const sort = _.orderBy(categories, [(category) => category.name], ['asc']);
    setSortedCategories(sort);
  }, []);

  const handlerClick = (name) => {
    setCategoryValue(name);
    console.log(setTypeValue);
  };
  return (
    <Command className="w-[350px] h-fit bg-white rounded-[12px] px-4 py-6 flex gap-6 ">
      <h1>Records</h1>
      <AddCategory />
      <div className={Style.buttonStyle3}>
        <CommandInput placeholder="Search" />
      </div>
      <CommandList>
        <CommandGroup heading="Types">
          <MenuCheckbox setTypeValue={setTypeValue} />
        </CommandGroup>
        <CommandSeparator />
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
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CategoryMenu;
