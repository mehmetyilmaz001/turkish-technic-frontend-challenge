import { LOCAL_STORAGE_KEYS, PATHS, STATUS } from "../../constants";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import history from '../../utils/history';

import "./Result.styles.scss";
import Alert, { ALERT_TYPE } from '../../components/Alert/Alert';

export default function Result(){
    const resultData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_SUB_CATEGORY));
    const hasFailed = resultData.subCategory.status === STATUS.ERROR

    return (
        <MainLayout className="result-page">

            <Alert type={hasFailed ? ALERT_TYPE.FAIL : ALERT_TYPE.SUCCESS} message={`Kabin seçiminiz ${hasFailed ? 'tamamlanamadi' : 'tamamlandı'}.`} 
                buttonProps={{
                    onClick:() => history.push(PATHS.QUERY),
                    label: "Başa Dön"
                }} />
            
            {!hasFailed && 
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