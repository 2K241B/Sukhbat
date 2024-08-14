import { Style } from '@/components/Constants';
import Layout from '@/components/Layout';
import RecordsListTable from '@/components/RecordsListTable';
import { Button } from '@/components/ui/button';
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
import { PlusIcon } from 'lucide-react';
const Records = () => {
  return (
    <Layout ChildStyle={true}>
      <Command className="w-[250px] h-fit bg-white rounded-[12px] px-4 py-6 flex gap-6">
        <h1>Records</h1>
        <Button className={Style.buttonStyle2}>
          <PlusIcon />
          Add
        </Button>
        <div className={Style.buttonStyle3}>
          <CommandInput placeholder="Search" />
        </div>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Types">
            <CommandItem>All</CommandItem>
            <CommandItem>Income</CommandItem>
            <CommandItem>Expense</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Category">
            <CommandItem>Food & Drinks</CommandItem>
            <CommandItem>Shopping</CommandItem>
            <CommandItem>Housing</CommandItem>
            <Button className="bg-white text-[#1F2937]">Add Catecory</Button>
          </CommandGroup>
        </CommandList>
      </Command>
      <RecordsListTable />
    </Layout>
  );
};

export default Records;
