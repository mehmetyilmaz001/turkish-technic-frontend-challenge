import React, { useMemo, useState } from 'react'
import { Button } from 'antd';
import { CustomTable } from '../../../../components/CustomTable/CustomTable';


export function FlightsTable({data}){
    const [rowDetail, setRowDetail] = useState(null);
    const tableHeader = useMemo(() => <>Sıralama Kriteri <Button>Ekonomi Ücreti</Button> <Button>Kalkış Saati</Button></>, []);
    const cols = [
        {name: 'flightInfo', render: (row, onShowDetail) => {
            return(
                <>
                    {row.arrivalDateTimeDisplay}
                    <button onClick={() => setRowDetail(row)}>detail show</button>
                </>
            );
        }},
        {name: 'selectionEconomy', render: (row) => {}},
        {name: 'selectionBusiness', render: (row) => {}},
    ];

    const rowDetailRender = useMemo(() => {
        if(!rowDetail) return <></>;

        <div>
            {rowDetail?.flightDuration}
        </div>
    }, [rowDetail]);

    console.log("row det", rowDetail);

    return (
        <div className='flight-table'>
            <CustomTable 
                header={tableHeader} 
                data={data} 
                cols={cols} 
                keyProp='arrivalDateTimeDisplay'
                rowDetail={rowDetailRender}
                />
        </div>
    )
}