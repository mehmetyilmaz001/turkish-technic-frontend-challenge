import React from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import useDetail from './hooks/useDetail';
import { FlightsTable } from './components/FlightsTable/FlightsTable';

import "./List.styles.scss";

const List = () => {
    const [details, selectedFlight] = useDetail();

    return (
        <MainLayout className="list-page">
            <div className="page-content">
                <h3 className="mini-title">Uçuş</h3>
                <h2 className="summary-title">
                    {details[0].originAirport?.city?.name} - {details[0].destinationAirport?.city?.name},
                    {selectedFlight?.cabinAndPassenger?.passenger} Yolcu
                </h2>
                <FlightsTable data={details} />
            </div>
        </MainLayout>
    );
}

export default List;