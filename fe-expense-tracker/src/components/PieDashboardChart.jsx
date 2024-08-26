import { Label, LabelList, Legend, Pie, PieChart, Tooltip } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useEffect, useState } from 'react';
import _ from 'lodash';
const chartConfig = {
  Others: {
    label: 'Others',
    color: '#0166FF',
  },
  Shopping: {
    label: 'Shopping',
    color: '#E74694',
  },
  Food: {
    label: 'Food',
    color: '#FDBA8C',
  },

  Bills: {
    label: 'Bills',
    color: '#F2901C',
  },
  Insurance: {
    label: 'Insurance',
    color: '#16BDCA',
  },
  Vehicle: {
    label: 'Vehicle',
    color: '#FF3131',
  },
};

export const PieDashboardChart = ({ getPieChartData, currency }) => {
  const [pieChartData, setPieChartData] = useState();
  const [totalExpense, setTotalExpense] = useState();
  useEffect(() => {
    const totalExpense = getPieChartData.reduce(
      (acc, el) => (acc += el.amount),
      0
    );
    setTotalExpense(totalExpense);
    const result = _.groupBy(getPieChartData, (el) => el.categoryname);
    const response = _.map(result, (records) => {
      const result = records.reduce(
        (acc, el) => {
          const amount = (acc.amount += el.amount);
          return { categoryname: el.categoryname, amount };
        },
        { amount: 0 }
      );
      return result;
    });

    setPieChartData(
      response.map((el) => ({ ...el, fill: `var(--color-${el.categoryname})` }))
    );
  }, []);

  return (
    <Card className="h-[284px] flex flex-col ">
      <CardHeader className="items-start px-8 py-4 border-b-[1px]">
        <CardTitle className="text-base">Expense</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex gap-16">
        <ChartContainer config={chartConfig} className="h-[230px] w-[330px]">
          <PieChart>
            <Pie data={pieChartData} dataKey="amount" innerRadius={40} />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              content={<ChartLegendContent nameKey="categoryname" />}
              className="flex flex-col items-start p-0"
            />
          </PieChart>
        </ChartContainer>
        <div className="flex flex-col pt-7">
          {pieChartData &&
            pieChartData.map((el) => (
              <div className="pb-4 grid grid-cols-2 text-xs w-full text-end text-[#111827] gap-16">
                <p className="">
                  {el.amount}
                  {currency == 'USD' ? '$' : '₮'}
                </p>
                <p>{Math.floor(el.amount / (totalExpense / 100))}%</p>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChart;
