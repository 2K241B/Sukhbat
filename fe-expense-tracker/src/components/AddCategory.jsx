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

import { PlusIcon, ArrowDropDown, CategorySelectAdd } from './icon';

import { X } from 'lucide-react';
import { useRef, useState } from 'react';
import axios from 'axios';
import CategorySelect from './CategorySelect';

export const AddCategory = ({ isAlerShow = false }) => {
  const [iconData, setIconData] = useState();
  const formRef = useRef();

  const handlerClick = async () => {
    console.log(iconData);
    await axios.post('http://localhost:8000/category/create', {
      name: formRef.current[0].value,
      description: formRef.current[0].value,
      category_image: iconData,
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={
          isAlerShow
            ? 'bg-white flex gap-2 h-8 leading-6 '
            : 'bg-[#F9FAFB] h-8 flex items-center justify-center gap-1 rounded-[20px] leading-6'
        }
      >
        {isAlerShow ? <CategorySelectAdd /> : <PlusIcon color="#0166FF" />}
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
            <CategorySelect setIconData={setIconData} />
            <form
              ref={formRef}
              className="p-4 rounded-[8px] bg-[#F9FAFB] border-[#94A3B8] border-[1px] flex items-center justify-between w-full"
            >
              <input className="bg-[#F9FAFB] outline-none" />
              <ArrowDropDown />
            </form>
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
