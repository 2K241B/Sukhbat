import { PlusIcon } from 'lucide-react';
import { Style } from './Constants';
import DashboardLogo from './icon/DashboardLogo';
import { Button } from './ui/button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Toggle } from '@/components/ui/toggle';

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

const styles = {
  ChildrenStyle: 'flex flex-col gap-6 w-[1200px] min-h-screen pb-10',
  ChildrenStyle2: 'flex flex-row gap-6 w-[1200px] min-h-screen pb-10',
  contentStyle: 'capitalize cursor-pointer leading-6 text-[#0F172A]',
  contentStyle2:
    'capitalize cursor-pointer leading-6 text-[#0F172A] font-semibold',
};
const content = ['dashboard', 'records'];

export const Layout = ({ children, ChildStyle = false }) => {
  const router = useRouter();
  // useEffect(() => {
  //   let user = localStorage.getItem('user');
  //   const data = JSON.parse(user);
  //   const userId = data.user.id;
  //   axios.get('http://localhost:8000/record/create'),
  //     {
  //       user_id: userId,
  //       name: 'income',
  //       amount: 222222,
  //       transaction_type: 'EXP',
  //       description: 'blabla',
  //       category_id: '758efb1b-969c-49a2-b030-55ca0033944d',
  //     };
  // }, []);
  return (
    <div className="flex flex-col items-center bg-[#F3F4F6] gap-6">
      <div className="bg-white flex justify-center w-full">
        <div className="flex justify-between items-center py-[16px] w-[1200px]">
          <div className="flex items-center gap-6">
            <Link href="/dashboard">
              <DashboardLogo />
            </Link>
            {content.map((el) => (
              <p
                onClick={() => router.push(`/${el}`)}
                className={styles.contentStyle}
              >
                {el}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-6">
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
                      <Toggle className="w-full px-3 focus:text-white rounded-[20px] text-[#1F2937] focus:bg-[#0166FF] hover:bg-[#0166FF]">
                        Expense
                      </Toggle>
                      <Toggle className="w-full bg-[#F3F4F6] focus:text-white  target:bg-[#16A34A] hover:bg-[#16A34A] rounded-[20px] text-[#1F2937]">
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

            <Image
              className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg"
              width={40}
              height={40}
              alt="Avatar"
            />
          </div>
        </div>
      </div>
      <div
        className={ChildStyle ? styles.ChildrenStyle2 : styles.ChildrenStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
