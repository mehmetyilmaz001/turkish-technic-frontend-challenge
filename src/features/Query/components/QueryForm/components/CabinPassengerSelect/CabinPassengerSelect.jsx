import React, { useEffect, useMemo, useState } from 'react';
import { Radio, Popover } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons'; 
import NumberSpinner from '../../../../../../components/NumberSpinner/NumberSpinner';
import { CABIN_TYPE } from '../../../../../../constants';

import './CabinPassengerSelect.styles.scss';

export default function CabinPassengerSelect({value, onChange, label}){    
    const [val, setVal] = useState(value || {cabin: CABIN_TYPE.ECONOMY, passenger: 1});
    
    useEffect(() => {
        onChange?.(val);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [val])

    const content = useMemo(() => {
        return (
            <div className='cabin-passenger-select-content'>
                <Radio.Group onChange={e => setVal(v => ({...v, cabin: e.target.value }))} value={val?.cabin}>
                    <Radio value={CABIN_TYPE.ECONOMY}>Economy Class</Radio>
                    <Radio value={CABIN_TYPE.BUSINESS}>Business Class</Radio>
                </Radio.Group>

                <div className='passenger-select'>
                    Yolcu
                    <NumberSpinner onChange={num => setVal(v => ({...v, passenger: num}))} value={val.passenger} min={1} />
                </div>
            </div>
        );
    }, [val?.cabin, val.passenger]);

    const renderIcon = useMemo(() => {
        if(val?.passenger > 3 ){
            return (
                <>
                    {Array.from({length: 3}).map((_, i)  => (<UserOutlined key={new Date().getMilliseconds + i} />))}
                    <PlusOutlined />
                </>
            )
        }

        return (<>{Array.from({length: val?.passenger || 1}).map((_, i) => (<UserOutlined key={new Date() + i} />))}</>)
    }, [val?.passenger]);

    return (
        <Popover content={content} title={label} trigger="click">
            <button className="cabin-passenger-select-button" type="button">
                <div className="icon">{renderIcon}</div>
                <div className="passenger-count">{val?.passenger}</div>
            </button>
        </Popover>
    )
}