import React from 'react'

const FormulaHeaderCard = ({ data, descriptor }) => {
  return (
    <div className='card border border-0 shadow-sm'>
      <div className="card-body">
        <p className="mb-2 text-muted opacity-50">{descriptor}</p>
        <h4>{data}</h4>
      </div>
    </div>
  )
}

export default FormulaHeaderCard