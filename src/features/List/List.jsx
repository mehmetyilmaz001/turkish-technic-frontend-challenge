import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import useDetail from './hooks/useDetail';
import { FlightsTable } from './components/FlightsTable/FlightsTable';
import { Switch } from 'antd';
import history from '../../utils/history';
import { LOCAL_STORAGE_KEYS, PATHS } from '../../constants';
import Alert, { ALERT_TYPE } from '../../components/Alert/Alert';

import "./List.styles.scss";

/**
 * List Component - The main page|feature component for listing the available flights
 *
 * @returns {JSX.Element}
 */
const List = () => {
    const [isPromoActive, setIsPromoActive] = useState(false);
    const [details, selectedFlight] = useDetail();

    const onSelectionDone = subCategory => {
        localStorage.setItem(LOCAL_STORAGE_KEYS.SELECTED_SUB_CATEGORY, JSON.stringify({ subCategory, selectedFlight }));
        history.push(PATHS.RESULT);
    }

    return (
        <MainLayout className="list-page">
            {details.length === 0 ? <Alert 
                                        type={ALERT_TYPE.FAIL} 
                                        message="Seçilen kriterlere uygun uçuş bulunamadı!"
                                        buttonProps={{
                                            onClick: () => history.push(PATHS.QUERY),
                                            label: "Başa Dön"
                                        }}    
                                    /> :
                <div className="page-content">
                    <h3 className="mini-title">Uçuş</h3>
                    <h2 className="summary-title">
                        {details[0]?.originAirport?.city?.name} - {details[0]?.destinationAirport?.city?.name},
                        {selectedFlight?.cabinAndPassenger?.passenger} Yolcu
                    </h2>
                    <div className="promo-switch">
                        <div className="swith-item"><strong>Promosyon Kodu</strong> <Switch onChange={setIsPromoActive} data-testid="switch" /></div>
                        {isPromoActive &&
                            <span className="promo-info">
                                Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini %50 indirimle satın alabilirsiniz! <br />
                                Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim yapılamamaktadır.
                            </span>
                        }
                    </div>
                    <FlightsTable data={details} isPromoActive={isPromoActive} onSelectionDone={onSelectionDone} />
                </div>
            }
        </MainLayout>
    );
}

export default List;