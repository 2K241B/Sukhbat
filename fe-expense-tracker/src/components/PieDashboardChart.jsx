import { Label, LabelList, Pie, PieChart, Tooltip } from 'recharts';
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
import { object } from 'zod';
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
    <Card className="flex flex-col h-[284px]">
      <CardHeader className="items-start px-8 py-4 border-b-[1px]">
        <CardTitle className="text-[16px]">Income - Expense</CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-row-reverse justify-between items-center p-0">
        <div className="flex flex-col gap-2 w-full pb-6 pr-6">
          {pieChartData &&
            pieChartData.map((el) => (
              <div className="grid grid-cols-3 text-sm w-full text-end text-[#111827]">
                <div className="flex items-center gap-2">
                  <div className={`size-3 rounded-full`}></div>
                  <p>{el.categoryname}</p>
                </div>
                <p>
                  {el.amount}
                  {currency == 'USD' ? '$' : '₮'}
                </p>
                <p>{Math.floor(el.amount / (totalExpense / 100))}%</p>
              </div>
            ))}
        </div>

        <ChartContainer
          config={chartConfig}
          className="aspect-square h-[250px]"
        >
          <PieChart className="pb-6">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={pieChartData}
              dataKey="amount"
              nameKey="categoryname"
              innerRadius={40}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        ></tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        ></tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PieChart;
