import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import './Alert.styles.scss';

export const ALERT_TYPE = {
    FAIL: 'fail',
    SUCCESS: 'success'
}

export default function Alert({ type = ALERT_TYPE.SUCCESS, message, buttonProps }) {
    return (
        <div className={`alert ${type}`}>
            <div className="content-container">
                <div className="icon">{type === ALERT_TYPE.FAIL ? <CloseCircleOutlined /> : <CheckCircleOutlined />}</div>
                <span className="message">{message}</span>
            </div>

            {type === ALERT_TYPE.FAIL && <Button className="btn-rtry" type="primary" {...buttonProps}>{buttonProps?.label}</Button>}
        </div>
    )
}