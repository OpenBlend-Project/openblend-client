import React from 'react'

const FormulaHeaderCard = ({ data, descriptor }) => {
  return (
    <div className='card border border-0 shadow-sm mt-2 mt-lg-0'>
      <div className="card-body">
        <p className="mb-2 text-muted opacity-50 text-nowrap">{descriptor}</p>
        <h4 className="text-nowrap">{data}</h4>
      </div>
    </div>
  )
}

export default FormulaHeaderCard