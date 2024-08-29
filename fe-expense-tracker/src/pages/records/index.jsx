import { CategoryMenu, RecordsListTable } from '@/components';
import { axiosInstance } from '@/lib/axios';
import { createContext, useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
export const RecordsDataContext = createContext();

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
        const date = new Date();
        const oldDate = new Date('2024-08-19T02:00:00Z');
        const ddate = new Date(records[0].createdat);

        ddate.setMonth(ddate.getMonth() - 1);

        console.log(ddate.toLocaleString());
        const result = records.sort((a, b) => {
          return new Date(b.createdat) - new Date(a.createdat);
        });
        // const result = records.filter(
        //   (el) => oldDate < el.createdat && el.createdat < date
        // );
        console.log();
        console.log(result);
        const sort = sortBy(records, ['createdat']);
        setRecordData(sort.reverse());
      });
    }

    axiosInstance.get('/category/').then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <RecordsDataContext.Provider
      value={{
        recordData,
        typeValue,
        setTypeValue,
        categories,
        setCategoryValue,
        currency,
        categoryValue,
      }}
    >
      <div className={styles.container}>
        {categories && <CategoryMenu />}
        {recordData && <RecordsListTable />}
      </div>
    </RecordsDataContext.Provider>
  );
};

export default Records;
