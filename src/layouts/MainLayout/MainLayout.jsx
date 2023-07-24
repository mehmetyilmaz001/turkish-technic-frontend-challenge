import React from 'react';
import './MainLayout.styles.scss';

const MainLayout = ({ theme, children, align = "center", className = '' }) => {
    return (
        <div className={`main-layout ${theme} ${className}`}>
            <header>
                <div className='branding'><a href='https://turkishairlines.com'>turkishairlines.com</a></div>
                <h1 className='title'><span style={{fontWeight: 'normal'}}>search</span>Flight Challenge</h1>
            </header>

            <article className={align}>
                {children}
            </article>
        </div>
    );
}

export default MainLayout;