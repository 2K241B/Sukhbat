import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Abstract, LogoWhite, Wi } from './icon';
export const BalanceCard = ({
  nextTotaltotalIncome,
  totalExpense,
  currency,
}) => {
  return (
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
            {nextTotaltotalIncome - totalExpense}
            {currency == 'USD' ? '$' : '₮'}
          </h1>
        </div>
        <Wi />
        <div className="absolute right-0 bottom-0">
          <Abstract />
        </div>
      </CardFooter>
    </Card>
  );
};

export default BalanceCard;
