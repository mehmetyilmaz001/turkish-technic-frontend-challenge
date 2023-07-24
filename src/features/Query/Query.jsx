import React, { useCallback } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import QueryForm from './components/QueryForm/QueryForm';
import { LOCAL_STORAGE_KEYS, PATHS } from '../../constants';
import history from '../../utils/history';

/**
 * Query Component - The main page|feature component for query the flights of the selected paramaters
 *
 * @returns {JSX.Element} - A number input spinner with increment and decrement buttons.
 */
const Query = () => {
    const onFinish = useCallback((values) => {
        localStorage.setItem(LOCAL_STORAGE_KEYS.SELECTED_QUERY_VALUES, JSON.stringify(values));
        history.push({
            pathname: PATHS.LIST
        });
    }, [])
    return (
        <MainLayout theme="dark">
            <div className='page-container'>
                <h2> Merhaba <br />
                    Nereyi keşfetmek istersiniz?</h2>
                <QueryForm onFinish={onFinish} />
            </div>
        </MainLayout>);
}

export default Query;