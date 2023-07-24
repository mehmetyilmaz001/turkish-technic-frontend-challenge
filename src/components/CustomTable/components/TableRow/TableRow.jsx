import React from 'react';
export default function TableRow({children}){
    return(
        <div className="table-row" style={{display: "flex", flexDirection: 'column'}}>
            {children}
        </div>
    )
}