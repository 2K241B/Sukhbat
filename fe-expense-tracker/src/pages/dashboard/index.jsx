import Cards from '@/components/Cards';
import { Chart } from '@/components/Chart';
import Layout from '@/components/Layout';
import RecordList from '@/components/RecordList';

const Dashboard = () => {
  return (
    <Layout>
      <Cards />
      <div className="grid grid-cols-2 gap-6 h-[284px]">
        <div className=" rounded-[18px] h-[186px] mb-10">
          <Chart />
        </div>
        <div className="bg-blue-400 rounded-[18px]"></div>
      </div>
      <div className="rounded-[12px] bg-white">
        <div className="py-4 px-6 border-b-[1px] border-[#E2E8F0]">
          Last Records
        </div>
        <RecordList />
      </div>
    </Layout>
  );
};

export default Dashboard;
