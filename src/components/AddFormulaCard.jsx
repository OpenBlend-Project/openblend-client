import React from 'react'

const AddFormulaCard = () => {
  return (
    <div className="col">
      <div className="card border border-0 shadow-sm" style={{ height: "212px" }} aria-hidden="true">
        <div className="card-body text-dark text-center px-4 py-3 d-flex flex-column align-items-center justify-content-center">
          <h5 className="card-title">Nothing to see yet.</h5>
          <p className="card-text ">Add your first formula by clicking below.</p>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createFormulaModal">
            Create new formula
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddFormulaCard
