import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 

// React Table
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

// Services
import formulasService from '../../services/formulas.service';

// React Table
const columnHelper = createColumnHelper();


const FormulaTable = ({ data }) => {
  console.log(data);
  const rerender = React.useReducer(() => ({}), {})[1]

  const formulaId = useParams();

  const columns = [
    {
      id: (row, index) => index,
      header: () => <span>Pos.</span>,
      cell: ({ row }) => <div className='text-center'><span className='text-secondary text-opacity-50'>{row.index + 1}</span></div>
    },
    columnHelper.accessor("material.name.common", {
      widht: "600",
      id: "rawMaterial",
      header: () => <span>Raw Material</span>,
      cell: info => info.getValue(),
    }),
    columnHelper.accessor("dilution.concentration", {
      id: "dilution",
      header: () => <span>Dilution</span>,
      cell: info => {
        if (info.getValue() >= 1) {
          return;
        }
        return <><span>{info.getValue() * 100}</span><span className="text-muted"> %</span></>
      }
    }),
    columnHelper.accessor("dilution.solvent.name.common", {
      id: "solvent",
      header: () => <span>Solvent</span>,
      cell: info => {
        if (!info.getValue()) return;
        return info.getValue();
      }
    }),
    columnHelper.accessor("amount.percent", {
      id: "amountPercent",
      header: () => <span>Amount (%)</span>,
      cell: info => {
        if (!info.getValue()) return;
        return <><span>{info.getValue()}</span><span className="text-muted"> %</span></>;
      }
    }),
    columnHelper.accessor("amount.grams", {
      id: "amountGrams",
      header: () => <span>Amount (g)</span>,
      cell: ({ getValue, row, column, table }) => {
        const initialGrams = getValue()
        // We need to keep and update the state of the cell normally
        const [value, setValue] = useState(initialGrams)
    
        // When the input is blurred, we'll call our table meta's updateData function
        const onBlur = () => {
          table.options.meta?.updateData(index, id, value)
        }
    
        // If the initialValue is changed external, sync it up with our state
        React.useEffect(() => {
          setValue(initialGrams)
        }, [initialGrams])
  
        const handleGramsChange = (e) => {
          setValue(e.target.value)
          console.log("triggered");
          formulasService.updateFormula(formulaId, )
            .then(response => {
              console.log(response)
            })
            .catch(error => console.log(error));
        }
    
        return (
          <input
            value={String(value)}
            onChange={handleGramsChange}
            onBlur={onBlur}
          />
        )
      },
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="block max-w-full overflow-x-scroll overflow-y-hidden mt-4 rounded border border-secondary border-opacity-25">
      <table className="w-full">
        <thead className="text-bg-light">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="bg-secondary bg-opacity-25">
              {headerGroup.headers.map(header => (
                <th key={header.id} className="p-3 fw-normal" style={{ fontSize: "12px" }}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index, array) => (
            <tr key={row.id} className={index < array.length - 1 ? "border-bottom border-secondary border-opacity-25" : ""}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="h-4" /> */}
      {/* <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button> */}
    </div>
  )




}

export default FormulaTable