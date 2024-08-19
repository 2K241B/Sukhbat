import CircleArrowUp from './icon/CircleArrowUp';
import CircleArrowDown from './icon/CircleArrowDown';
import { useEffect, useState } from 'react';
import { DashboardCard } from './DashboardCard';
import { CardCircle } from './icon/CardCircle';
import BalanceCard from './BalanceCard';

export const Cards = ({ getBarChartData, currency }) => {
  let [totalIncome, setTotalIncome] = useState([]);
  let [totalExpense, settotalExpense] = useState([]);
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    getBarChartData &&
      getBarChartData.map(
        (el) =>
          Number(el.month) === currentMonth &&
          (totalIncome.push(el.income), totalExpense.push(el.expense))
      );
    const sumInc = totalIncome.reduce((total, num) => total + num, 0);
    const sumExp = totalExpense.reduce((total, num) => total + num, 0);
    setTotalIncome(sumInc);
    settotalExpense(sumExp);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 max-h-[220px]">
      <BalanceCard
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        currency={currency}
      />
      <DashboardCard
        header={'Your Income'}
        total={totalIncome}
        currency={currency}
        icon={<CircleArrowUp />}
        circle={<CardCircle color="#84CC16" />}
      />
      <DashboardCard
        header={'Total Expenses'}
        total={totalExpense}
        currency={currency}
        icon={<CircleArrowDown />}
        circle={<CardCircle color="#0166FF" />}
      />
    </div>
  );
};

export default Cards;
