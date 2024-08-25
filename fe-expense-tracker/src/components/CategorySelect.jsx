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

export const CategorySelect = ({ formRef }) => {
  return (
    <Select ref={formRef}>
      <SelectTrigger className="w-[50px] bg-[#F9FAFB] outline-none border-none p-0 max-h-[24px]">
        <SelectValue placeholder={<CategorySelectAdd />} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="grid grid-cols-3 p-6">
          <SelectItem value="House">
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
