import Abstract from '@/components/icon/Abstract';
import LogoWhite from '@/components/icon/LogoWhite';
import Wi from '@/components/icon/Wi';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
export const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-6 max-h-[220px]">
      <Card className="bg-[#0166FF] max-h-[220px] relative rounded-[18px]">
        <CardHeader>
          <LogoWhite />
        </CardHeader>
        <CardFooter className="items-end justify-between pb-0 pr-[40px] pt-11">
          <div>
            <h1 className="text-base font-normal leading-6 text-[#FFFFFF] opacity-50">
              Cash
            </h1>
            <h1 className="text-2xl font-semibold text-white">10,000,00</h1>
          </div>
          <Wi />
          <div className="absolute right-0 top-0">
            <Abstract />
          </div>
        </CardFooter>
      </Card>
      <Card className="rounded-[18px]">
        <CardHeader>
          <CardTitle>Your Income</CardTitle>
        </CardHeader>
        <CardContent>
          <p>1,200,000$</p>
          <p>Your Income Amount</p>
        </CardContent>
        <CardFooter>
          <p>32% from last month</p>
        </CardFooter>
      </Card>
      <Card className="rounded-[18px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
