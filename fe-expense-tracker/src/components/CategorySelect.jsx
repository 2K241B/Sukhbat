import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  CategorySelectAdd,
  DrinkIcon,
  FoodIcon,
  GiftIcon,
  HouseIcon,
  ShoppingIcon,
  TaxiIcon,
} from './icon';

const icons = {
  gift: <GiftIcon />,
};

export const CategorySelect = ({ setIconData }) => {
  return (
    <Select onValueChange={(e) => setIconData(e)}>
      <SelectTrigger className="rounded-[8px] border-[#94A3B8] border-[1px] bg-[#F9FAFB] p-4 min-h-[57.5px] w-[84px]">
        <SelectValue placeholder={<CategorySelectAdd />} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="grid grid-cols-3 p-6">
          <SelectItem value="house">
            <HouseIcon />
          </SelectItem>
          <SelectItem value="gift">
            <GiftIcon />
          </SelectItem>
          <SelectItem value="food">
            <FoodIcon />
          </SelectItem>
          <SelectItem value="shopping">
            <ShoppingIcon />
          </SelectItem>
          <SelectItem value="taxi">
            <TaxiIcon />
          </SelectItem>
          <SelectItem value="drink">
            <DrinkIcon />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategorySelect;
