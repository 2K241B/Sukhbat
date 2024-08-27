import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const RecordsSortingSelect = ({ setStoringValues }) => {
  return (
    <Select onValueChange={(e) => setStoringValues(e)}>
      <SelectTrigger className="w-[170px]">
        <SelectValue placeholder="Newest first" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="newest">Newest first</SelectItem>
          <SelectItem value="oldest">Oldest first</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default RecordsSortingSelect;
