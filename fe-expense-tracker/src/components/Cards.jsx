import Abstract from '@/components/icon/Abstract';
import LogoWhite from '@/components/icon/LogoWhite';
import Wi from '@/components/icon/Wi';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import CircleArrowUp from './icon/CircleArrowUp';
import CircleArrowDown from './icon/CircleArrowDown';
import { useEffect, useState } from 'react';
export const Cards = ({ recordData, currency }) => {
  let [totalIncome, setTotalIncome] = useState([]);
  let [totalExpense, settotalExpense] = useState([]);
  useEffect(() => {
    {
      recordData &&
        recordData.map((el) =>
          el.transaction_type == 'INC'
            ? totalIncome.push(el.amount)
            : totalExpense.push(el.amount)
        );
    }
    const sumInc = totalIncome.reduce((total, num) => total + num, 0);
    const sumExp = totalExpense.reduce((total, num) => total + num, 0);
    setTotalIncome(sumInc);
    settotalExpense(sumExp);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 max-h-[220px]">
      <Card className="bg-[#0166FF] max-h-[220px] relative rounded-[18px]">
        <CardHeader>
          <LogoWhite />
        </CardHeader>
        <CardFooter className="items-end justify-between pr-[30px] pt-12">
          <div>
            <h1 className="text-base font-normal leading-6 text-[#FFFFFF] opacity-50">
              Cash
            </h1>
            <h1 className="text-2xl font-semibold text-white">
              {totalIncome - totalExpense}
              {currency == 'USD' ? '$' : '₮'}
            </h1>
          </div>
          <Wi />
          <div className="absolute right-0 bottom-0">
            <Abstract />
          </div>
        </CardFooter>
      </Card>
      <Card className=" max-h-[220px] rounded-[18px]">
        <CardHeader className="border-b-[1px] p-0">
          <div className="flex items-center gap-2 px-6 py-4 font-semibold leading-6 text-[#0F172A]">
            <div className="size-2 bg-[#84CC16] rounded-full"></div>Your Income
          </div>
        </CardHeader>
        <CardContent className="px-6 py-5 flex flex-col gap-1">
          <p className=" text-[36px] font-semibold leading-[48px]">
            {totalIncome}
            {currency == 'USD' ? '$' : '₮'}
          </p>
          <p className="text-lg leading-7 text-slate-500">Your Income Amount</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <CircleArrowUp />
          <p className="text-[18px] leading-7">32% from last month</p>
        </CardFooter>
      </Card>
      <Card className=" max-h-[220px] rounded-[18px]">
        <CardHeader className="border-b-[1px] p-0">
          <div className="flex items-center gap-2 px-6 py-4 font-semibold leading-6 text-[#0F172A]">
            <div className="size-2 bg-[#0166FF] rounded-full"></div>
            Total Expenses
          </div>
        </CardHeader>
        <CardContent className="px-6 py-5 flex flex-col gap-1">
          <p className=" text-[36px] font-semibold leading-[48px]">
            -{totalExpense}
            {currency == 'USD' ? '$' : '₮'}
          </p>
          <p className="text-lg leading-7 text-slate-500">Your Income Amount</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <CircleArrowDown />
          <p className="text-[18px] leading-7">32% from last month</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
