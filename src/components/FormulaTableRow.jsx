import React from 'react'
import { useState, useEffect } from 'react'

// Assets
import trashIcon from '../assets/icons/trash.svg';

// React Router DOM
import { Link } from 'react-router-dom';

// Services
import formulasService from '../../services/formulas.service';

const FormulaTableRow = ({ ingredient, index, array, formulaId, reloadFormula, totalWeight, updateTotalWeight }) => {
  const [grams, setGrams] = useState(ingredient.amount.grams);
  const [percent, setPercent] = useState(ingredient.amount.percent);

  const ingredientId = ingredient._id

  useEffect(() => {
    setPercent(grams / totalWeight * 100);
  }, [totalWeight])

  const handleGramsChange = (e) => {
    const diff = e.target.value - grams

    setGrams(e.target.value);
    updateTotalWeight(diff);
    reloadFormula();
  };


  const handleGramsEdit = (e) => {
    const requestBody = { grams, percent };

    formulasService.updateFormulaIngredient(formulaId, ingredientId, requestBody)
      .then(response => reloadFormula())
      .catch(error => console.log(error))
,
    console.log(formulaId, ingredientId, requestBody);
  }

  const handleDelete = () => {
    formulasService.deleteFormulaIngredient(formulaId, ingredientId)
      .then(response => {
        console.log(response);
        updateTotalWeight(-grams);
        reloadFormula()
      })
      .catch(error => console.log(error))
  }

  return (
    <div className={`${index < array.length - 1 && "border-bottom border-secondary border-opacity-25"} row p-2 align-items-center`} style={{ fontSize: "14px" }}>
      <div className="col-1">
        <span>{index + 1}</span>
      </div>
      <div className="col-4">
        <span>{ingredient.material.name.common}</span>
      </div>
      <div className="col-1 text-end">
        {ingredient.dilution && ingredient.dilution.concentration < 1 && (
          <span className="d-inline-block">
            {(ingredient.dilution.concentration * 100).toFixed(2)}
            <span className="opacity-25"> %</span>
          </span>
        )}
      </div>
      <div className="col-1">
        {ingredient.dilution && ingredient.dilution.concentration < 1 && <span className="opacity-25">in</span>}
      </div>
      <div className="col-2">
        <span>{(ingredient.dilution && ingredient.dilution.concentration < 1 && ingredient.dilution.solvent) && ingredient.dilution.solvent.name.common}</span>
      </div>
      <div className="col-1 text-end">
        <span>{percent && percent.toFixed(2)} <span style={{ color: "#cbd5e1" }}>%</span></span>
      </div>
      <div className="col-1 text-end">
        <input type="text" inputMode="numeric" className="form-control form-control-sm text-end" id="exampleFormControlInput1" value={grams} onChange={handleGramsChange} onBlur={handleGramsEdit} />
      </div>
      <div className="col-1 text-end">
       <img className="" src={trashIcon} alt="delete" style={{ width: "18px", height: "18px", cursor: "pointer" }} onClick={handleDelete} />
      </div>
    </div>
  )
}

export default FormulaTableRow