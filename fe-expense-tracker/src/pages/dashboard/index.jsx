import Cards from '@/components/Cards';
import { Chart } from '@/components/Chart';
import Layout from '@/components/Layout';
import { PieDashboardChart } from '@/components/PieDashboardChart';
import RecordList from '@/components/RecordList';
import axios from 'axios';
import { useEffect, useState } from 'react';

const styles = {
  chartContainer: 'grid grid-cols-2 gap-6 h-[284px]',
  recordListContainer: 'rounded-[12px] bg-white',
  recordListHeader: 'py-4 px-6 border-b-[1px] border-[#E2E8F0]',
};

const Dashboard = () => {
  const [recordData, setRecordData] = useState();
  const [currency, setCurrency] = useState('MNT');
  const [getBarChartData, setGetBarChartData] = useState();

  useEffect(() => {
    let user = localStorage.getItem('user');
    const data = JSON.parse(user);
    const userId = data.user.id;
    const currenryType = data.user.currency_type;
    setCurrency(currenryType);
    {
      axios
        .get(`http://localhost:8000/record/id/${userId}`)
        .then((res) => setRecordData(res.data));
    }
    {
      axios
        .get(`http://localhost:8000/record/getBarChartData/${userId}`)
        .then((response) => setGetBarChartData(response.data));
    }
  }, []);

  return (
    <Layout>
      {getBarChartData && (
        <Cards getBarChartData={getBarChartData} currency={currency} />
      )}
      <div className={styles.chartContainer}>
        <Chart getBarChartData={getBarChartData} />
        <PieDashboardChart />
      </div>
      <div className={styles.recordListContainer}>
        <div className={styles.recordListHeader}>Last Records</div>
        {recordData && (
          <RecordList recordData={recordData} currency={currency} />
        )}
      </div>
    </Layout>
  );
};
export default Dashboard;
