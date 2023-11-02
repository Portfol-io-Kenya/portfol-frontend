"use client"
import React from 'react'

import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table'

type Payment = {
    date: string
    description: string
    paymentMethod: string
    category: string
    status: string
    amount: string
}

const defaultData: Payment[] = [
    {
      date: '01 Jan',
      description: 'Boosted Posting',
      paymentMethod: 'Card',
      category: 'Productivity',
      status: 'Success',
      amount: "$5000",
    },
    {
      date: '06 March',
      description: 'Connects Purchase',
      paymentMethod: 'Card',
      category: 'Productivity',
      status: 'Pending',
      amount: "$10",
    },
  ]

export function PaymentsTable() {
  const rerender = React.useReducer(() => ({}), {})[1]

  const columns = React.useMemo<ColumnDef<Payment>[]>(
    () => [
      
        {
            accessorKey: 'date',
            cell: info => info.getValue(),
            header: () => <span>Date</span>,
            footer: props => props.column.id,
        },
        {
            accessorKey: 'description',
            header: () => <span>Description</span>,
            footer: props => props.column.id,
        },
        {
            accessorKey: 'paymentMethod',
            header: () => 'Payment Method',
            footer: props => props.column.id,
        },
        {
            accessorKey: 'category',
            header: () => <span>Category</span>,
            footer: props => props.column.id,
        },
        {
            accessorKey: 'status',
            header: 'Status',
            footer: props => props.column.id,
        },
        {
            accessorKey: 'amount',
            header: 'Amount',
            right: true,
            cell: (row: any) => <div className='text-right pr-2'>{row.getValue()}</div>,
            footer: props => props.column.id,
        },
    ],
    []
  )

  const [data, setData] = React.useState(() => [...defaultData])

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  })

  return (
    <>
      <div className="">
        <div className="h-2" />
        <table className="w-full">
          <thead className='border-b-2 border-gray-700'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div className='text-left pb-2'>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id} className='text-sm py-5 border-b border-slate-200'>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="h-2" />
        <div className="flex items-center gap-2">
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={e => {
              table.setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>{table.getRowModel().rows.length} Rows</div>
      </div>
    </>
  )
}
