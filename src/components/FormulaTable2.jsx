import React from 'react'
import { useState } from 'react'

// Components
import FormulaTableRow from './FormulaTableRow';

const FormulaTable2 = ({ data }) => {
  console.log(data);

  return (
    <div className="container-fluid rounded border border-secondary border-opacity-25 overflow-hidden mt-4">
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
      
      {data && data.ingredients.map((ingredient, index, array) => {  
        return (
          <FormulaTableRow
            key={ingredient._id}
            ingredient={ingredient}
            index={index}
            array={array}
            formulaId={data._id}
          />
        )
      })}
    </div>
  )
}

export default FormulaTable2