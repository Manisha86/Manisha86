import React,{useMemo} from 'react'
import  useTable  from 'react'
import { COLUMNS } from './COLUMNS'
import './table.css'
import MOCK_DATA from './MOCK_DATA.json'

export const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data= useMemo(()=> MOCK_DATA,[])
        const tableInstance,{     getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
        }=useTable({
            columns,
            data
        }) 
         
    return(
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroups =>(
                        <tr{...headerGroups.getHeaderGroupProps()}>
                        {
                            headerGroups.headers.map((column)=>(
                                <th{...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                    </tr>
                    ))
                }
            </thead>
            <tbody{...getTableBodyProps()}>
            {
                rows.map(row =>{
                    prepareRow(row)
                    return(
                        <tr{...row.getRowProps()}>
                        {
                            row.cells.map((cell)=> {
                                return<td{...cell.getCellProps()}>{cell.render('cell')}</td>
                            })
                        }
                        </tr>
                    )
                })
            }   
            </tbody>
        </table>
    )
}

export default BasicTable