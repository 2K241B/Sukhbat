import CategoryMenu from '@/components/CategoryMenu';
import Layout from '@/components/Layout';
import RecordsListTable from '@/components/RecordsListTable';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Records = () => {
  const [recordData, setRecordData] = useState();
  const [currency, setCurrency] = useState('MNT');
  const [categories, setCategories] = useState();
  useEffect(() => {
    let user = localStorage.getItem('user');
    const data = JSON.parse(user);
    const userId = data.user.id;
    const currencyType = data.user.currency_type;
    setCurrency(currencyType);
    {
      axios
        .get(`http://localhost:8000/record/id/${userId}`)
        .then((res) => setRecordData(res.data));
    }
    {
      axios.get('http://localhost:8000/category/').then((response) => {
        setCategories(response.data);
      });
    }
  }, []);
  return (
    <Layout ChildStyle={true}>
      {categories && <CategoryMenu categories={categories} />}
      {recordData && (
        <RecordsListTable recordData={recordData} currency={currency} />
      )}
    </Layout>
  );
};

export default Records;
