import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
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
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useEffect, useState } from 'react';

const chartConfig = {
  income: {
    label: 'income',
    color: '#0166FF',
  },
  expense: {
    label: 'expense',
    color: '#F54949',
  },
};
export const Chart = ({ getBarChartData }) => {
  return (
    <Card className="h-[284px]">
      <CardHeader className="py-4 px-6 border-b-[1px]">
        <CardTitle className="text-[16px] ">Income - Expense</CardTitle>
      </CardHeader>
      <CardContent className="py-8 px-6 flex gap-4 justify-between ">
        <ChartContainer className="h-[162px] w-full" config={chartConfig}>
          <BarChart accessibilityLayer data={getBarChartData}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#CBD5E1"
            />
            <YAxis stroke="#fff" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              stroke="#CBD5E1"
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="income" fill="#0166FF" radius={4} barSize={14} />
            <Bar dataKey="expense" fill="#F54949" radius={4} barSize={14} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
