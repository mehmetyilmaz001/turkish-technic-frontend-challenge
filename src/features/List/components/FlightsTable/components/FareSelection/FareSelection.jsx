import React, { useCallback, useEffect, useState } from 'react';
import { Radio } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { CABIN_TYPE } from '../../../../../../constants';

import "./FareSelection.styles.scss";

export default function FareSelection({row, rowIndex, prevRowIndex, onFareSelect, isPromoActive}){
    const [selectedFare, setSelectedFare] = useState(null);

    const onChangeFlare = useCallback((val) => {
        setSelectedFare(val);
        onFareSelect(rowIndex, row?.fareCategories[val]?.subcategories);

    }, [onFareSelect, row?.fareCategories, rowIndex]);


    useEffect(() => {
        if(prevRowIndex !== rowIndex){
            setSelectedFare(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prevRowIndex, rowIndex]);
    
    const renderCard = useCallback((label) => {
        
        const rawAmount = row?.fareCategories[label]?.subcategories[0]?.price.amount;
        const amount = isPromoActive && label === 'ECONOMY' ? rawAmount / 2 : rawAmount; 
        
        return (
            <div key={label} className={`card align-center ${selectedFare === label ? 'selected':''}`} onClick={() => onChangeFlare(label)}>
                <Radio value={label}>{label}</Radio>
                <div className="price">
                    <span className="title">Yolcu Başına</span>
                    <span className="value">{row.fareCategories[label]?.subcategories[0]?.price?.currency} {amount}</span>
                </div>
                {selectedFare === label ? <UpOutlined /> : <DownOutlined />}
            </div>
        )
    }, [isPromoActive, onChangeFlare, row.fareCategories, selectedFare])

    return (
        <div className="fare-selection">
             <Radio.Group name={`fare-selection`} value={selectedFare} onChange={(e) => onChangeFlare(e.target.value)}>
                {Object.keys(CABIN_TYPE).map(key => renderCard(key))}
             </Radio.Group>
        </div>
    )
}


