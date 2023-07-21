import React from 'react';
import './MainLayout.styles.scss';

const MainLayout = ({ theme, children }) => {
    return (
        <div className={`main-layout ${theme}`}>
            <header>
                <div className='branding'><a href='https://turkishairlines.com'>turkishairlines.com</a></div>
                <h1 className='title'>searchFlight Challenge</h1>
            </header>

            <article>
                {children}
            </article>
        </div>
    );
}

export default MainLayout;