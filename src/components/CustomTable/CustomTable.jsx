import React from 'react';
import { TableCell } from "./components/TableCell/TableCell";
import TableRow from "./components/TableRow/TableRow";
import './CustomTable.styles.scss';

/**
 * Custom Table - A lightweight fully customizable table component
 *
 * @param {JSX.Element} header - Component for rendering the table header
 * @param {Array} data - Data for displaying the rows and cells
 * @param {string} keyProp - Key prop name for the React Key mechanism
 * @param {Array} cols - List of columns info
 * @param {JSX.Element} rowDetail - Component for displaying the detail row for a selected info
 */
export function CustomTable({ header, data, keyProp, cols, rowDetail }) {
    return (
        <div className="custom-table">
            <div className="table-header">
                {header}
            </div>

            <div className="table-body">
                {data.map((row, index) =>
                    <TableRow key={row[keyProp]}>
                        <div className="cell-container">
                            {cols.map(col =>
                                <TableCell key={col.name}>
                                    {col?.render ? col.render(index, row) : row[col.name]}
                                </TableCell>
                            )}
                            </div>
                        {rowDetail && rowDetail.rowIndex === index && <div className="row-detail">{rowDetail.content}</div>}
                    </TableRow>
                )}
            </div>
        </div>
    )
}

