import React from 'react';
import { Toggle } from '@/components/ui/toggle';
import { PlusIcon } from 'lucide-react';
import { Style } from './Constants';
import { Button } from './ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from './ui/input';
import { DatePicker } from './DatePicker';
export const RecordAlertDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-[#0166FF] h-8 text-white flex items-center justify-center gap-1 px-3 rounded-[20px] leading-6">
        <PlusIcon />
        Record
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[744px] h-fit p-0">
        <AlertDialogHeader className="border-b-[1px] px-6 py-5">
          <AlertDialogTitle>Add Record</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="grid grid-cols-2">
          <form className="p-6 pt-5 flex flex-col gap-5">
            <div className="flex bg-[#F3F4F6] rounded-[20px]">
              <Toggle className="w-full px-3 focus:text-white rounded-[20px] text-[#1F2937] focus:bg-[#0166FF] ">
                Expense
              </Toggle>
              <Toggle className="w-full bg-[#F3F4F6] focus:text-white  focus:bg-[#16A34A] rounded-[20px] text-[#1F2937]">
                Income
              </Toggle>
            </div>
            <div className="flex flex-col gap-5">
              <Input />
              <h1>Category</h1>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex flex-col gap-8">
                <div>
                  <h1>Date</h1>
                  <DatePicker />
                </div>
                <Button className="w-full px-3 text-white rounded-[20px] bg-[#0166FF] hover:bg-[#0166FF]">
                  Add Record
                </Button>
              </div>
            </div>
          </form>
          <div className="pt-11 p-6 flex flex-col">
            <h1>Payee</h1>
            <Input />
            <h2>Note</h2>
            <Input className="h-[248px] w-full" />
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialog;
