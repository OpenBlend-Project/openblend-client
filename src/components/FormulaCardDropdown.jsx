import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Services
import formulasService from '../../services/formulas.service'

const FormulaCardDropdown = ({ data }) => {
  const navigate = useNavigate();

  const handleDeleteFormula = (formulaId) =>{
    formulasService.deleteFormula(formulaId)
      .then(response => {
        console.log("deleted formula")
        navigate("/formulas");
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="dropdown-menu dropdown-menu-end offset-2 border border-0 shadow">
      <Link type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#editFormulaModal">Edit formula</Link>
      <hr className="dropdown-divider" />
      <span className="dropdown-item text-danger" onClick={() => handleDeleteFormula(data._id)}>Delete Formula</span>
    </div>
  )
}

export default FormulaCardDropdown