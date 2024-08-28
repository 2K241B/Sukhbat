import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { CircleArrowDown, CircleArrowUp } from './icon';
export const DashboardCard = ({
  header,
  totalLast,
  total,
  currency,
  icon,
  circle,
  colorArrow,
  title,
}) => {
  const percentage = Math.floor((total / totalLast - 1) * 100);
  return (
    <Card className=" max-h-[220px] rounded-[18px]">
      <CardHeader className="border-b-[1px] p-0">
        <div className="flex items-center gap-2 px-6 py-4 font-semibold leading-6 text-[#0F172A]">
          {circle}
          {header}
        </div>
      </CardHeader>
      <CardContent className="px-6 py-5 flex flex-col gap-1">
        <p className=" text-[36px] font-semibold leading-[48px]">
          {total}
          {currency == 'USD' ? '$' : '₮'}
        </p>
        <p className="text-lg leading-7 text-slate-500">Your {title} Amount</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        {percentage > 0 ? (
          <CircleArrowUp colorArrow={colorArrow} />
        ) : (
          <CircleArrowDown colorArrow={colorArrow} />
        )}
        <p className="text-[18px] leading-7">
          {total === 0 || totalLast === 0 ? 0 : percentage} % from last month
        </p>
      </CardFooter>
    </Card>
  );
};

export default Card;
