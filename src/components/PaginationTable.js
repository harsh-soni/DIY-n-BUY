import React, {useMemo} from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, groupedColumns} from './columnsShopByParts';
import './tableShopByParts.css'
export const PaginationTable=()=>{
    const columns=useMemo(()=> groupedColumns, [])
    const data=useMemo(()=> MOCK_DATA, [])
   const tableInstance= useTable({
        columns,
        data
    },useSortBy, usePagination)
    const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow,
    }=tableInstance
    const {pageIndex}=state
    return(
        <>
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                    headerGroup.headers.map(column => (
                                        <th {... column.getHeaderProps(column.getSortByToggleProps)}>{column.render('Header')}
                                        <span>
                                            {column.isSorted? (column.isSortedDesc ? ' 🔽' : ' 🔼'):''}
                                            </span>
                                            </th>
                                    ))
                            }
                    
                </tr>
                    ))

                    
                }
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell =>{
                                       return <td{...cell.getCellProps()}>
                                        {cell.render('Cell')}

                                        </td>

                                    })
                                }
                   
                </tr>


                        )
                    })
                }
                
            </tbody>
            
        </table>
        <div>
            <span>
                Page{' '}
                <strong>
                    {pageIndex+1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
        </div>
        </>
    )
}