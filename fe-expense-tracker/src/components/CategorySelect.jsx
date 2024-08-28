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
import {
  Beer,
  CarFront,
  CarTaxiFront,
  Cross,
  Ellipsis,
  FolderOpenDot,
  Gift,
  House,
  Image,
  Landmark,
  PlaneTakeoff,
  Shirt,
  ShoppingBag,
  Utensils,
  Wine,
} from 'lucide-react';

export const icons = {
  Gift: <GiftIcon />,
  House: <HouseIcon />,
  Food: <FoodIcon />,
  Shopping: <ShoppingIcon />,
  Taxi: <TaxiIcon />,
  Drink: <Beer color="white" />,
  Insurance: <Cross color="white" fill="white" stroke="10" />,
  Vehicle: <CarFront color="white" />,
  Others: <Ellipsis color="white" fill="white" />,
  Bills: <Landmark color="white" fill="white" />,
  Image: <Image color="white" />,
  Plane: <PlaneTakeoff color="white" />,
};

export const CategorySelect = ({ setIconData }) => {
  return (
    <Select onValueChange={(e) => setIconData(e)}>
      <SelectTrigger className="rounded-[8px] border-[#94A3B8] border-[1px] bg-[#F9FAFB] p-4 min-h-[57.5px] w-[84px]">
        <SelectValue placeholder={<CategorySelectAdd />} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="grid grid-cols-3">
          <SelectItem value="House">
            <House />
          </SelectItem>
          <SelectItem value="Gift">
            <Gift />
          </SelectItem>
          <SelectItem value="Food">
            <Utensils />
          </SelectItem>
          <SelectItem value="Shopping">
            <Shirt />
          </SelectItem>
          <SelectItem value="Taxi">
            <CarTaxiFront />
          </SelectItem>
          <SelectItem value="Drink">
            <Beer />
          </SelectItem>
          <SelectItem value="Insurance">
            <Cross />
          </SelectItem>
          <SelectItem value="Vehicle">
            <CarFront />
          </SelectItem>
          <SelectItem value="Others">
            <Ellipsis />
          </SelectItem>
          <SelectItem value="Bills">
            <Landmark />
          </SelectItem>
          <SelectItem value="Image">
            <Image />
          </SelectItem>
          <SelectItem value="Plane">
            <PlaneTakeoff />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategorySelect;
