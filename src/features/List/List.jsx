import React from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import useDetail from './hooks/useDetail';
import { FlightsTable } from './components/FlightsTable/FlightsTable';


const List = () => {
    const [details, selectedFlight] = useDetail();

    console.log("tableData => ", details);

    return (
        <MainLayout>
            <h3 className='mini-title'>Uçuş</h3>
            <h2 className='summary-title'>
                {details[0].originAirport?.city?.name} - {details[0].destinationAirport?.city?.name}, 
                {selectedFlight?.cabinAndPassenger?.passenger} Yolcu</h2>

        <FlightsTable data={details}  />
        </MainLayout>
    );
}

export default List;