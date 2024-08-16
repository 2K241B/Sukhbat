import Cards from '@/components/Cards';
import { Chart } from '@/components/Chart';
import Layout from '@/components/Layout';
import { PieDashboardChart } from '@/components/PieDashboardChart';
import RecordList from '@/components/RecordList';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [recordData, setRecordData] = useState();
  const [currency, setCurrency] = useState('MNT');
  useEffect(() => {
    let user = localStorage.getItem('user');
    const data = JSON.parse(user);
    const userId = data.user.id;
    const currenryType = data.user.currency_type;
    setCurrency(currenryType);
    axios
      .get(`http://localhost:8000/record/id/${userId}`)
      .then((res) => setRecordData(res.data));
  }, []);
  return (
    <Layout>
      {recordData ? (
        <Cards recordData={recordData} currency={currency} />
      ) : (
        <></>
      )}
      <div className="grid grid-cols-2 gap-6 h-[284px]">
        <Chart recordData={recordData} />
        <PieDashboardChart />
      </div>
      <div className="rounded-[12px] bg-white">
        <div className="py-4 px-6 border-b-[1px] border-[#E2E8F0]">
          Last Records
        </div>
        {recordData ? (
          <RecordList recordData={recordData} currency={currency} />
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
