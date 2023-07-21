import React from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import QueryForm from './components/QueryForm/QueryForm';

const Query = () => {
    return (
        <MainLayout theme="dark">
            <div className='page-container'>
                <h2> Merhaba <br />
                    Nereyi kesfetmek istersiniz?</h2>
                <QueryForm />
            </div>
        </MainLayout>);
}

export default Query;