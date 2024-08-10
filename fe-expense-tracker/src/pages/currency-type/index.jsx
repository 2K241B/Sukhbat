import { LogoIcon } from '@/components/icon/logoIcon';
import { CurrencyIcon } from '@/components/icon/CurrencyIcon';
import { Button } from '@/components/ui/button';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Process = ['Currency', 'Balance', 'Finish'];
const CurrencyType = () => {
  return (
    <div className="flex flex-col items-center gap-[141px]">
      <div className="flex flex-col items-center gap-12">
        <LogoIcon />
        <div className="flex gap-12 relative">
          {Process.map((el, i) => (
            <div className="flex flex-col items-center gap-1">
              <div className="size-6 bg-[#E5E7EB] rounded-full text-center">
                {i + 1}
              </div>
              <p>{el}</p>
            </div>
          ))}
          <div className="w-[200px] h-1 bg-[#E5E7EB] absolute left-6 top-2.5 z-[-1]"></div>
        </div>
      </div>
      <div className="flex flex-col items-center w-[384px]">
        <div className="flex flex-col items-center gap-4 mb-6">
          <CurrencyIcon />
          <h1 className="text-2xl font-semibold">Select base currency</h1>
        </div>
        <Select>
          <SelectTrigger className="w-full h-[64px] p-4 text-[16px] font-semibold">
            <SelectValue placeholder="MNT - Mongolian Tugrik" />
          </SelectTrigger>
          <SelectContent className="text-[16px] font-semibold">
            <SelectItem value="MNT">MNT - Mongolian Tugrik</SelectItem>
            <SelectItem value="USD">USD - US Dollar</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-[12px] font-normal leading-4 mt-3 mb-8 text-[#475569]">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{' '}
        </p>
        <Button className="w-full h-12 p-4 rounded-[20px] bg-[#0166FF] text-[#FFFFFF]">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default CurrencyType;
