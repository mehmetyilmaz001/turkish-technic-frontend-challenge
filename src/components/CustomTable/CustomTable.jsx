import { TableCell } from "./components/TableCell/TableCell";
import TableRow from "./components/TableRow/TableRow";
import './CustomTable.styles.scss';

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

