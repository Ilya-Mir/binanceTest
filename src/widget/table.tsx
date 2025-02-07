import React from 'react'
import { useTable, useSortBy } from 'react-table'
import { Styles } from './table.style'

// @ts-ignore
const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      autoResetSortBy: false,
    },
    useSortBy,
  )

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {//
                  column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const TableCom: React.FC<{
  data: any
}> = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Pair',
        accessor: 'pair',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Change',
        accessor: 'change',
      },
    ],
    [],
  )

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default TableCom
