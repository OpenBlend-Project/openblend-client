import React from 'react'
import { useState } from 'react'

// Assets
import trashIcon from '../assets/icons/trash.svg';

// React Router DOM
import { Link } from 'react-router-dom';

// Services
import formulasService from '../../services/formulas.service';

const FormulaTableRow = ({ ingredient, index, array, formulaId, reloadFormula }) => {
  const [grams, setGrams] = useState(ingredient.amount.grams);

  const ingredientId = ingredient._id

  const handleGramsChange = (e) => {
    setGrams(e.target.value);
  };

  const handleGramsEdit = (e) => {
    const requestBody = { grams };

    formulasService.updateFormulaIngredient(formulaId, ingredientId, requestBody)
      .then(response => console.log(response))
      .catch(error => console.log(error))

    console.log(formulaId, ingredientId, requestBody);
  }

  const handleDelete = () => {
    formulasService.deleteFormulaIngredient(formulaId, ingredientId)
      .then(response => reloadFormula());
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
        <span>{ingredient.amount.percent} <span className="opacity-25">%</span></span>
      </div>
      <div className="col-1 text-end">
        <input type="text" inputMode="numeric" className="form-control form-control-sm text-end" id="exampleFormControlInput1" value={grams} onChange={handleGramsChange} onBlur={handleGramsEdit} />
      </div>
      <div className="col-1 text-end">
       <img className="opacity-25" src={trashIcon} alt="delete" style={{ width: "18px", height: "18px" }} onClick={handleDelete} />
      </div>
    </div>
  )
}

export default FormulaTableRow