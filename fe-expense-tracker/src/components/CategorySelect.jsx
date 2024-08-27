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

export const Gift = <GiftIcon />;
export const HouseIco = <HouseIcon />;
export const icons = {
  Gift: <GiftIcon />,
  House: HouseIco,
  Food: <FoodIcon />,
  Shopping: <ShoppingIcon />,
  Taxi: <TaxiIcon />,
  Drink: <DrinkIcon />,
};

export const CategorySelect = ({ setIconData }) => {
  return (
    <Select onValueChange={(e) => setIconData(e)}>
      <SelectTrigger className="rounded-[8px] border-[#94A3B8] border-[1px] bg-[#F9FAFB] p-4 min-h-[57.5px] w-[84px]">
        <SelectValue placeholder={<CategorySelectAdd />} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="grid grid-cols-3 p-6">
          <SelectItem value="House">
            <HouseIcon />
          </SelectItem>
          <SelectItem value="Gift">
            <GiftIcon />
          </SelectItem>
          <SelectItem value="Food">
            <FoodIcon />
          </SelectItem>
          <SelectItem value="Shopping">
            <ShoppingIcon />
          </SelectItem>
          <SelectItem value="Taxi">
            <TaxiIcon />
          </SelectItem>
          <SelectItem value="Drink">
            <DrinkIcon />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategorySelect;
