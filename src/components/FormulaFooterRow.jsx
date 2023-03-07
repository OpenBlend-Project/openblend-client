import React from 'react'

const FormulaFooterRow = ({ totalWeight }) => {
  return (
    <div className="row row-cols-8 bg-secondary bg-opacity-25 p-2" style={{ fontSize: "12px" }}>
      <div className="col-1">
        <span></span>
      </div>
      <div className="col-4">
        <span></span>
      </div>
      <div className="col-1 text-end">
        <span></span>
      </div>
      <div className="col-1"></div>
      <div className="col-2">
        <span></span>
      </div>
      <div className="col-1 text-end">
        <span></span>
      </div>
      <div className="col-1 text-end">
        <span>{totalWeight && totalWeight} g</span>
      </div>
      <div className="col-1">
      </div>
    </div>
  )
}

export default FormulaFooterRow