import { Legend, Pie, PieChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegendContent } from '@/components/ui/chart';
import { useContext, useEffect, useState } from 'react';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import { DataContext } from '@/pages/dashboard';

const styles = {
  card: 'h-[284px] flex flex-col ',
  cardHeader: 'items-start px-8 py-4 border-b-[1px]',
  cardContent: 'p-0 flex gap-16',
  chartContainer: 'h-[230px] w-[330px]',
  legend: 'flex flex-col items-start p-0',
  amountContainer: 'flex flex-col items-center justify-center',
  amount:
    'grid pb-4 last:pb-0 grid-cols-2 text-xs w-full text-end text-[#111827] gap-16',
};

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

export const PieDashboardChart = () => {
  const { getPieChartData, currency } = useContext(DataContext);

  const [pieChartData, setPieChartData] = useState();
  const [totalExpense, setTotalExpense] = useState();

  useEffect(() => {
    const totalExpense = getPieChartData.reduce(
      (acc, el) => (acc += el.amount),
      0
    );
    setTotalExpense(totalExpense);
    const result = groupBy(getPieChartData, (el) => el.categoryname);
    const response = map(result, (records) => {
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
      response
        .slice(0, 6)
        .map((el) => ({ ...el, fill: `var(--color-${el.categoryname})` }))
    );
  }, []);

  return (
    <Card className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <CardTitle className="text-base">Expense</CardTitle>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <ChartContainer config={chartConfig} className={styles.chartContainer}>
          <PieChart>
            <Pie data={pieChartData} dataKey="amount" innerRadius={40} />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              content={<ChartLegendContent nameKey="categoryname" />}
              className={styles.legend}
            />
          </PieChart>
        </ChartContainer>
        <div className={styles.amountContainer}>
          {pieChartData &&
            pieChartData.map((el) => (
              <div className={styles.amount}>
                <p>
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
