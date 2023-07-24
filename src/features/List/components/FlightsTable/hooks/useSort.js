import { useCallback, useEffect, useState } from 'react';
import { LIST_TABLE_SORT_BY } from '../../../../../constants';

export default function useSort(data){
    const [tableData, setTableData] = useState(data);

    useEffect(() => {
        onSort(LIST_TABLE_SORT_BY.ECONOMY_FARE);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSort = useCallback((sortBy) => {
        const sortedData = [...tableData.sort((a, b) => {
            
            const amountA = a?.fareCategories?.ECONOMY?.subcategories[0]?.price?.amount;
            const amountB = b?.fareCategories?.ECONOMY?.subcategories[0]?.price?.amount;

            const takeofTimeA = parseInt(a?.departureDateTimeDisplay);
            const takeofTimeB = parseInt(b?.departureDateTimeDisplay);

            if (sortBy === LIST_TABLE_SORT_BY.ECONOMY_FARE){
                return amountA - amountB;
            } else if(sortBy === LIST_TABLE_SORT_BY.TAKE_OF_TIME){
                return takeofTimeA - takeofTimeB;
            }else{
                return 0;
            }
        })];

        setTableData(sortedData);
    }, [tableData]);

    return [onSort, tableData];
}