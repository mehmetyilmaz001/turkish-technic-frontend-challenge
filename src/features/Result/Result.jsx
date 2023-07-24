import { Button } from 'antd';
import { LOCAL_STORAGE_KEYS, PATHS, STATUS } from "../../constants";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import history from '../../utils/history';

import "./Result.styles.scss";

export default function Result(){
    const resultData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_SUB_CATEGORY));
    const hasFailed = resultData.subCategory.status === STATUS.ERROR

    return (
        <MainLayout className="result-page">
            <div className={`result ${hasFailed? 'failed' :''}`}>

                <div className="icon-message-container">
                    <div className="icon">{hasFailed ? <CloseCircleOutlined /> : <CheckCircleOutlined />}</div>
                    <span className="message">Kabin seçiminiz {hasFailed ? 'tamamlanamadi' : 'tamamlandı'}.</span>
                </div>

                {hasFailed ? <Button className="btn-back" onClick={() => history.push(PATHS.QUERY)} type="primary">Başa Dön</Button>:
                    <div className="total-amount">
                        <span className="title">Toplam tutar</span>
                        <span className="amount">
                            {resultData?.subCategory?.price?.currency} &nbsp;
                            {resultData?.subCategory?.price?.amount * resultData?.selectedFlight?.cabinAndPassenger?.passenger}
                        </span>
                </div>}
            </div>
        </MainLayout>
    )

}