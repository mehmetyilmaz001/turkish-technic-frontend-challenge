import { TableCell } from "./components/TableCell/TableCell";
import TableRow from "./components/TableRow/TableRow";

export function CustomTable({ header, data, keyProp, cols, rowDetail }) {
    return (
        <div className='custom-table'>
            <div className='header'>
                {header}
            </div>

            <div className='body'>
                {data.map(row => 
                    <TableRow key={row[keyProp]}>
                        {cols.map(col => 
                            <TableCell key={col.name}>
                                {col?.render ? col.render(row) : row[col.name]}
                            </TableCell>
                        )}
                        {rowDetail && <div className='row-detail'>{rowDetail}</div>}
                    </TableRow>
                )}
            </div>
        </div>
    )
}

