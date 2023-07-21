import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import './NumberSpinner.styles.scss';

export default function NumberSpinner({min = 0, max, step = 1, onChange, value}){
    const [val, setValue] = useState(value || min);

    const onIncrement = useCallback(() => {
        setValue(v => {
            if(v >= max) return;
            return v + step;
        })
    }, [max, step]);

    const onDecrement = useCallback(() => {
        setValue( v => {
            if(v <= min) return;
            return v - step;
        });
    }, [min, step]);


    useEffect(() => {
        onChange(val);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [val])


    return (
        <div className='number-spinner'>
            <Button onClick={onDecrement} disabled={val === min} size='small'><MinusOutlined /></Button>
            <span className='number'>{val}</span>
            <Button onClick={onIncrement} disabled={max && val === max} size='small'><PlusOutlined /></Button>
        </div>
    );
}