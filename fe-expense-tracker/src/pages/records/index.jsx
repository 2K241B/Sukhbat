import { CategoryMenu, RecordsListTable } from '@/components';
import { axiosInstance } from '@/lib/axios';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';

const styles = {
  container: 'flex flex-row gap-6 w-[1200px] min-h-screen pb-10',
};

const Records = () => {
  const [typeValue, setTypeValue] = useState('ALL');
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

      axiosInstance.get(`/record/id/${userId}`).then((res) => {
        const records = res.data;
        const sort = sortBy(records, ['createdat']);
        setRecordData(sort.reverse());
      });
    }

    axiosInstance.get('/category/').then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      {categories && (
        <CategoryMenu
          recordData={recordData}
          typeValue={typeValue}
          setTypeValue={setTypeValue}
          categories={categories}
          setCategoryValue={setCategoryValue}
        />
      )}
      {recordData && (
        <RecordsListTable
          recordData={recordData}
          currency={currency}
          categoryValue={categoryValue}
          typeValue={typeValue}
        />
      )}
    </div>
  );
};

export default Records;
