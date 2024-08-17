import CategoryMenu from '@/components/CategoryMenu';
import Layout from '@/components/Layout';
import RecordsListTable from '@/components/RecordsListTable';

const Records = () => {
  return (
    <Layout ChildStyle={true}>
      <CategoryMenu />
      <RecordsListTable />
    </Layout>
  );
};

export default Records;
