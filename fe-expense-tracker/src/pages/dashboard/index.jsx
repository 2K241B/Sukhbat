import { Cards, Chart, PieDashboardChart, RecordList } from '@/components';
import { axiosInstance } from '@/lib/axios';
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
  const [getPieChartData, setGetPieChartData] = useState();

  useEffect(() => {
    let user = localStorage.getItem('user');
    if (user) {
      const data = JSON.parse(user);
      const userId = data.user.id;
      const currenryType = data.user.currency_type;
      setCurrency(currenryType);

      axiosInstance
        .get(`/record/recordPieChart/${userId}`)
        .then((resp) => setGetPieChartData(resp.data));

      axiosInstance
        .get(`/record/id/${userId}`)
        .then((res) => setRecordData(res.data));

      axiosInstance
        .get(`/record/getBarChartData/${userId}`)
        .then((response) => setGetBarChartData(response.data));
    }
  }, []);
  return (
    <div className="flex flex-col gap-6">
      {getBarChartData && (
        <Cards getBarChartData={getBarChartData} currency={currency} />
      )}
      <div className={styles.chartContainer}>
        <Chart getBarChartData={getBarChartData} />
        {getPieChartData && (
          <PieDashboardChart
            getPieChartData={getPieChartData}
            currency={currency}
          />
        )}
      </div>
      <div className={styles.recordListContainer}>
        <div
          className={`${styles.recordListHeader} font-semibold text-[#0F172A]`}
        >
          Last Records
        </div>
        {recordData && (
          <RecordList recordData={recordData} currency={currency} />
        )}
      </div>
    </div>
  );
};
export default Dashboard;
