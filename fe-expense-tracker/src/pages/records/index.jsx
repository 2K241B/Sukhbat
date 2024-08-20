import CategoryMenu from '@/components/CategoryMenu';
import Layout from '@/components/Layout';
import RecordsListTable from '@/components/RecordsListTable';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Records = () => {
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
    console.log(recordData);
  }, []);
  return (
    <Layout ChildStyle={true}>
      <CategoryMenu />
      <RecordsListTable recordData={recordData} currency={currency} />
    </Layout>
  );
};

export default Records;
