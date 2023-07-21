import React from 'react'
import { CalendarOutlined } from '@ant-design/icons';

import './DatePicker.styles.scss';

export default function DatePicker ({label}) {
    return (
        <div className='empty-datepicker'>
            {label}
            <CalendarOutlined />    
        </div>
    )
}