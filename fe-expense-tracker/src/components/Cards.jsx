import { useEffect, useState } from 'react';
import { DashboardCard } from './DashboardCard';
import { CardCircle } from './icon/CardCircle';
import BalanceCard from './BalanceCard';

export const Cards = ({ getBarChartData, currency }) => {
  const [prevTotal, setPrevTotal] = useState([]);
  const [nextTotal, setNextTotal] = useState([]);
  useEffect(() => {
    const lastIndex = getBarChartData.length;
    if (lastIndex <= 1) {
      const next = getBarChartData.slice(lastIndex - 1, lastIndex);
      setNextTotal(next);
      setPrevTotal({
        month: '7',
        income: 1000000,
        expense: 1000000,
      });
    } else {
      const [prev, next] = getBarChartData.slice(lastIndex - 2, lastIndex);
      setPrevTotal(prev);
      setNextTotal(next);
    }
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 max-h-[220px]">
      <BalanceCard
        nextTotaltotalIncome={nextTotal.income}
        totalExpense={nextTotal.expense}
        currency={currency}
      />
      <DashboardCard
        header={'Your Income'}
        total={nextTotal.income}
        totalLast={prevTotal.income}
        currency={currency}
        circle={<CardCircle color="#84CC16" />}
        colorArrow={'#84CC16'}
      />

      <DashboardCard
        header={'Total Expenses'}
        total={nextTotal.expense}
        totalLast={prevTotal.expense}
        currency={currency}
        circle={<CardCircle color="#0166FF" />}
        colorArrow={'#0166FF'}
      />
    </div>
  );
};

export default Cards;
