import React, { useMemo, useState } from 'react'
import { Button } from 'antd';
import { CustomTable } from '../../../../components/CustomTable/CustomTable';
import FlightInfoCell from './components/FlightInfoCell/FlightInfoCell';
import FareSelection from './components/FareSelection/FareSelection';
import SubCategorySelection from './components/SubCategorySelection/SubCategorySelection';


export function FlightsTable({ data }) {
    const [rowDetail, setRowDetail] = useState({
        row: null,
        rowIndex: -1
    });

    const onFareSelect = (rowIndex, selectedFareCategories) => {
        setRowDetail({rowIndex, row: selectedFareCategories});
    }

    const onSubCategorySelect = (subCategory) => {
        console.log("son sub category select", subCategory);
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
                    onSubCategorySelect={onSubCategorySelect}  />
    }), [rowDetail.row, rowDetail?.rowIndex]);
    
    const tableHeader = useMemo(() => <>Sıralama Kriteri <Button>Ekonomi Ücreti</Button> <Button>Kalkış Saati</Button></>, []);

    return (
        <div className='flight-table'>
            <CustomTable
                header={tableHeader}
                data={data}
                cols={cols}
                keyProp='arrivalDateTimeDisplay'
                rowDetail={renderRowDetail}
            />
        </div>
    )
}