import React, { useMemo, useState } from 'react'
import { Button } from 'antd';
import { CustomTable } from '../../../../components/CustomTable/CustomTable';
import FlightInfoCell from './components/FlightInfoCell/FlightInfoCell';
import FareSelection from './components/FareSelection/FareSelection';
import SubCategorySelection from './components/SubCategorySelection/SubCategorySelection';
import { LIST_TABLE_SORT_BY } from '../../../../constants';
import useSort from './hooks/useSort';

import "./FlightsTable.styles.scss";


export function FlightsTable({ data, isPromoActive }) {
    const [rowDetail, setRowDetail] = useState({
        row: null,
        rowIndex: -1
    });
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const [onTableSort, tableData] = useSort(data);

    const onFareSelect = (rowIndex, selectedFareCategories) => {
        setRowDetail({rowIndex, row: selectedFareCategories});
    }

    const onSubCategorySelect = (subCategory) => {
        console.log("son sub category select", subCategory);
        setSelectedSubCategory(subCategory);
    }

    const cols = [
        {
            name: 'flightInfo', 
            render: (_, row) => <FlightInfoCell row={row} />    
            
        },
        { 
            name: 'fareSelection', 
            render: (rowIndex, row) => <FareSelection 
                                            rowIndex={rowIndex} 
                                            prevRowIndex={rowDetail.rowIndex} 
                                            row={row} 
                                            onFareSelect={onFareSelect} /> 
        },
    ];
    
    const renderRowDetail = useMemo( () => ({
        rowIndex: rowDetail?.rowIndex,
        content: <SubCategorySelection 
                    subCategories={rowDetail.row}
                    isPromoActive={isPromoActive}
                    selectedSubCategory={selectedSubCategory}
                    onSubCategorySelect={onSubCategorySelect}  />
    }), [isPromoActive, rowDetail.row, rowDetail?.rowIndex, selectedSubCategory]);
    
    const tableHeader = useMemo(() => 
            <>
                Sıralama Kriteri 
                <Button ghost onClick={() => onTableSort(LIST_TABLE_SORT_BY.ECONOMY_FARE)}>
                    Ekonomi Ücreti
                </Button> 
                <Button ghost onClick={() => onTableSort(LIST_TABLE_SORT_BY.TAKE_OF_TIME)}>
                    Kalkış Saati
                </Button></>, 
    [onTableSort]);

    return (
        <div className='flights-table'>
            <CustomTable
                header={tableHeader}
                data={tableData}
                cols={cols}
                keyProp='arrivalDateTimeDisplay'
                rowDetail={renderRowDetail}
            />
        </div>
    )
}