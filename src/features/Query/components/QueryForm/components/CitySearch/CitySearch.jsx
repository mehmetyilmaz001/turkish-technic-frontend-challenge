import React from 'react';
import DebounceSelect from '../../../../../../components/DebounceSelect';
import useFetchCities from './useFetchCities';

import './CitySearch.styles.scss';

const CitySearch = ({ value, onChange, onInputKeyDown, onFail, ...rest }) => {
    const fetchCityList = useFetchCities();

    return (
        <div className='city-search'>
            <DebounceSelect
                value={value}
                fetchOptions={fetchCityList}
                onChange={onChange}
                onInputKeyDown={onInputKeyDown}
                onFail={onFail}
                style={{ width: '100%' }}
                allowClear
                size="large"
                {...rest}
            />
        </div>

    );
}

export default CitySearch;