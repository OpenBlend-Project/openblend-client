import React from 'react'
import { useState, useEffect } from 'react'
import FormulaFooterRow from './FormulaFooterRow';

// Components
import FormulaTableRow from './FormulaTableRow';

const FormulaTable = ({ data, reloadFormula }) => {
  const [totalWeight, setTotalWeight] = useState(data.ingredients.reduce((acc, val) => acc + val.amount.grams, 0));

  const updateTotalWeight = (diff) => {
    setTotalWeight(prev => prev +diff)
  }

  console.log(totalWeight);

  return (
    <div className="table-responsive">
      <table className="table table-hover align-items-center mt-4" style={{ fontSize:  "14px"}}>
        <thead>
          <tr className="align-items-center" style={{ fontSize: "12px" }}>
            <th scope="col" className="fw-normal text-nowrap">Pos.</th>
            <th scope="col" className="fw-normal w-25 text-nowrap">Raw material</th>
            <th className="text-end fw-normal text-nowrap" scope="col">Conc.</th>
            <th className="text-center fw-normal text-nowrap" scope="col"></th>
            <th scope="col" className="fw-normal w-25 text-nowrap">Solvent</th>
            <th className="text-end fw-normal text-nowrap" scope="col">%</th>
            <th className="text-end fw-normal text-nowrap" scope="col">g</th>
            <th scope="col" className="fw-normal text-nowrap"></th>
          </tr>
        </thead>
        <tbody>
          {data && data.ingredients
            .sort((next, current) => parseFloat(current.amount.grams) - parseFloat(next.amount.grams))
            .map((ingredient, index, array) => {
            return (
              <FormulaTableRow
                key={ingredient._id}
                ingredient={ingredient}
                index={index}
                array={array}
                formulaId={data._id}
                reloadFormula={reloadFormula}
                totalWeight={totalWeight}
                updateTotalWeight={updateTotalWeight}
              />
            )
          })}
        </tbody>
        <tfoot>
          <FormulaFooterRow totalWeight={totalWeight}/>
        </tfoot>
      </table>
    </div>
  )
}

export default FormulaTable