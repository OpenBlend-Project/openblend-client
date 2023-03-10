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
    <tr className="align-middle">
      <th scope="row" className="text-muted text-nowrap">{index + 1}</th>
      <td className="text-nowrap">
        {ingredient.material.name.common}
      </td>
      <td className="text-end text-nowrap"> 
        {ingredient.dilution && ingredient.dilution.concentration < 1 && (
          <span className="d-inline-block">
            {(ingredient.dilution.concentration * 100).toFixed(2)}
            <span className="opacity-25"> %</span>
          </span>
        )}
      </td>
      <td className="text-center text-nowrap">
        {ingredient.dilution && ingredient.dilution.concentration < 1 && <span className="opacity-25">in</span>}
      </td>
      <td className="text-nowrap">
        <span>{(ingredient.dilution && ingredient.dilution.concentration < 1 && ingredient.dilution.solvent) && ingredient.dilution.solvent.name.common}</span>
      </td>
      <td className="text-end text-nowrap">
        <span>{(percent && percent !== "NaN") ? percent.toFixed(2) : "0.00"} <span style={{ color: "#cbd5e1" }}>%</span></span>
      </td>
      <td className="text-end text-nowrap">
        <input type="number" inputMode="numeric" className="form-control form-control-sm text-end ms-auto" id="exampleFormControlInput1" value={grams} onChange={handleGramsChange} onBlur={handleGramsEdit} style={{ width: "64px"}}/>
      </td>
      <td className="text-end text-nowrap">
        <img className="mb-1" src={trashIcon} alt="delete" style={{ width: "18px", height: "18px", cursor: "pointer" }} onClick={handleDelete} />
      </td>
    </tr>
  )
}

export default FormulaTableRow