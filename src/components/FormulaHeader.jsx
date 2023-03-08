import React from 'react'
import FormulaHeaderCard from './FormulaHeaderCard'

const FormulaHeader = ({ data }) => {

  return (
    <div className='row row-cols-1 row-cols-md-4 mt-4'>
      <div className="col">
        <FormulaHeaderCard descriptor={"Olfactive Family"} data={data.olfactiveFamily}/>
      </div>
      <div className="col">
        <FormulaHeaderCard descriptor={"Concentration"} data={`${(data.concentration * 100).toFixed(2)} %`}/>
      </div>
      <div className="col">
        <FormulaHeaderCard descriptor={"Used Raw Materials"} data={data.ingredients.length}/>
      </div>
      <div className="col">
        <FormulaHeaderCard descriptor={"Stage"} data={data.stage}/>
      </div>
    </div>
  )
}

export default FormulaHeader