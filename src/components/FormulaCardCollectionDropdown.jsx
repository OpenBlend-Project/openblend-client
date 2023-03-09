import React from 'react'
import { Link } from 'react-router-dom'


const FormulaCardCollectionDropdown = ({ data, handleDeleteFormulaFromCollection }) => {
  
  return (
    <div className="dropdown-menu dropdown-menu-end offset-2 border border-0 shadow">
      <Link type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#editFormulaModal">Edit formula</Link>
      <hr className="dropdown-divider" />
      <span className="dropdown-item text-danger" onClick={() => handleDeleteFormulaFromCollection(data._id)}>Delete from Collection</span>
    </div>
  )
}

export default FormulaCardCollectionDropdown