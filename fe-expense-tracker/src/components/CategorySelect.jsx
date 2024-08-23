import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Eye, Gift, House } from 'lucide-react';
import HouseIcon from './icon/HouseIcon';
import GiftIcon from './icon/GiftIcon';
import FoodIcon from './icon/FoodIcon';
import ShoppingIcon from './icon/ShoppingIcon';
import TaxiIcon from './icon/TaxiIcon';
import DrinkIcon from './icon/DrinkIcon';
import CategorySelectAdd from './icon/CategorySelectAdd';
import { useState } from 'react';

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
          <SelectItem value={HouseIcon}>
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
