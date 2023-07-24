import React from 'react';
import { LOCAL_STORAGE_KEYS, PATHS, STATUS } from "../../constants";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import history from '../../utils/history';
import Alert, { ALERT_TYPE } from '../../components/Alert/Alert';

import "./Result.styles.scss";

/**
 * Result Component - The main page|feature component for displaying the success or fail resul.
 *
 * @returns {JSX.Element}
 */
export default function Result(){
    const resultData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_SUB_CATEGORY));
    const hasFailed = resultData?.subCategory?.status === STATUS.ERROR;

    return (
        <MainLayout className="result-page">

            <Alert type={hasFailed || !resultData ? ALERT_TYPE.FAIL : ALERT_TYPE.SUCCESS} message={`Kabin seçiminiz ${hasFailed ? 'tamamlanamadi' : 'tamamlandı'}.`} 
                buttonProps={{
                    onClick:() => history.push(PATHS.QUERY),
                    label: "Başa Dön"
                }} />
            
            {!hasFailed && resultData && 
                    <div className="total-amount">
                        <span className="title">Toplam tutar</span>
                        <span className="amount">
                            {resultData?.subCategory?.price?.currency} &nbsp;
                            {resultData?.subCategory?.price?.amount * resultData?.selectedFlight?.cabinAndPassenger?.passenger}
                        </span>
                </div>}
        </MainLayout>
    )

}