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
    <div className="container-fluid rounded border border-secondary border-opacity-25 overflow-hidden mt-3 shadow-sm">
      <div className="row row-cols-8 bg-secondary bg-opacity-25 p-2" style={{ fontSize: "12px" }}>
        <div className="col-1">
          <span>Pos.</span>
        </div>
        <div className="col-4">
          <span>Raw Material</span>
        </div>
        <div className="col-1 text-end">
          <span>Conc.</span>
        </div>
        <div className="col-1"></div>
        <div className="col-2">
          <span>Solvent</span>
        </div>
        <div className="col-1 text-end">
          <span>%</span>
        </div>
        <div className="col-1 text-end">
          <span>g</span>
        </div>
        <div className="col-1">
        </div>
      </div>
      
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
      <FormulaFooterRow totalWeight={totalWeight}/>
    </div>
  )
}

export default FormulaTable