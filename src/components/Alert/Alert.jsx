import React from 'react';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import './Alert.styles.scss';

export const ALERT_TYPE = {
    FAIL: 'fail',
    SUCCESS: 'success'
}

/**
 * Alert - A display component that renders fail | success state messages.
 *
 * @param {string} type
 * @param {string} message
 */
export default function Alert({ type = ALERT_TYPE.SUCCESS, message, buttonProps }) {
    return (
        <div className={`alert ${type}`}>
            <div className="content-container">
                <div className="icon">{type === ALERT_TYPE.FAIL ? <CloseCircleOutlined data-testid="fail-icon" /> : <CheckCircleOutlined data-testid="success-icon"/>}</div>
                <span className="message">{message}</span>
            </div>

            {type === ALERT_TYPE.FAIL && <Button data-testid="retry-button" className="btn-rtry" type="primary" {...buttonProps}>{buttonProps?.label}</Button>}
        </div>
    )
}