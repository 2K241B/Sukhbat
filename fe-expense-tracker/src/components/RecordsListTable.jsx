import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import RecordDateList from './RecordDateList';
import RecordsSortingSelect from './RecordsSortingSelect';
import { useState } from 'react';

const styles = {
  arrowButton:
    'p-0 size-8 rounded-[8px] flex justify-center items-center gap-1 bg-white text-[#0F172A] border-[#E5E7EB] border-[1px] bg-[#F9FAFB]',
  container: 'flex items-center py-4 justify-between',
  subContainer: 'flex gap-4 items-center',
};

export const RecordsListTable = ({
  recordData,
  currency,
  categoryValue,
  typeValue,
}) => {
  const [sortingValues, setSortingValues] = useState('newest');

  return (
    <div className="w-full">
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <Button className={styles.arrowButton}>
            <ChevronLeft size={20} />
          </Button>
          <p>Last 30 Days</p>
          <Button className={styles.arrowButton}>
            <ChevronRight size={20} />
          </Button>
        </div>
        <RecordsSortingSelect setSortingValues={setSortingValues} />
      </div>
      {recordData && (
        <RecordDateList
          sortingValues={sortingValues}
          recordData={recordData}
          currency={currency}
          categoryValue={categoryValue}
          typeValue={typeValue}
        />
      )}
    </div>
  );
};
export default RecordsListTable;
