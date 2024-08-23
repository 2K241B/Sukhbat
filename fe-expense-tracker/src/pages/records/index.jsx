import CategoryMenu from '@/components/CategoryMenu';
import RecordsListTable from '@/components/RecordsListTable';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Records = () => {
  const [recordData, setRecordData] = useState();
  const [currency, setCurrency] = useState('MNT');
  const [categories, setCategories] = useState();
  const [categoryValue, setCategoryValue] = useState();
  useEffect(() => {
    let user = localStorage.getItem('user');
    if (user) {
      const data = JSON.parse(user);
      const userId = data.user.id;
      const currencyType = data.user.currency_type;
      setCurrency(currencyType);
      axios
        .get(`http://localhost:8000/record/id/${userId}`)
        .then((res) => setRecordData(res.data));
    }
    axios.get('http://localhost:8000/category/').then((response) => {
      setCategories(response.data);
    });
  }, []);
  return (
    <div className="flex flex-row gap-6 w-[1200px] min-h-screen pb-10">
      {categories && (
        <CategoryMenu
          categories={categories}
          setCategoryValue={setCategoryValue}
        />
      )}
      {recordData && (
        <RecordsListTable
          recordData={recordData}
          currency={currency}
          categoryValue={categoryValue}
        />
      )}
    </div>
  );
};

export default Records;
