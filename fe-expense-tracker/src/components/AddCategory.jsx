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

import { PlusIcon, ArrowDropDown } from './icon';

import { X } from 'lucide-react';
import { useRef } from 'react';
import axios from 'axios';
import CategorySelect from './CategorySelect';

export const AddCategory = () => {
  const formRef = useRef();
  const handlerClick = async () => {
    console.log(formRef);
    // await axios.post('http://localhost:8000/category/create', {
    //   name: formRef.current[0].value,
    //   description: formRef.current[0].value,
    //   category_image: '',
    // });
    // location.reload();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-[#0166FF] h-8 text-white flex items-center justify-center gap-1 px-3 rounded-[20px] leading-6">
        <PlusIcon />
        Add Category
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[466px] h-fit p-0">
        <AlertDialogHeader className="border-b-[1px] px-6 py-5 flex flex-row justify-between items-center">
          <AlertDialogTitle>Add Category</AlertDialogTitle>
          <AlertDialogCancel className="border-0 p-0 items-start hover:bg-white">
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <div className="flex flex-col gap-8 p-6 w-full">
          <div className="flex items-center w-full gap-3">
            <div className="flex items-center p-4 rounded-[8px] bg-[#F9FAFB] border-[#94A3B8] border-[1px]">
              <CategorySelect formRef={formRef} />
            </div>
            <div className="p-4 rounded-[8px] bg-[#F9FAFB] border-[#94A3B8] border-[1px] flex items-center justify-between w-full">
              <input className="bg-[#F9FAFB] outline-none" />
              <ArrowDropDown />
            </div>
          </div>
          <AlertDialogAction
            onClick={handlerClick}
            className="w-full bg-[#16A34A] hover:bg-[#16A34A] rounded-[20px] text-white"
          >
            Continue
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddCategory;
