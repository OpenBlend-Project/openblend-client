import React from 'react'
import { useEffect, useState} from 'react'

// React Router DOM
import { useParams } from 'react-router-dom'

// Services
import formulasService from '../../services/formulas.service';

// Components
import FormulaTable2 from '../components/FormulaTable2'
import MaterialsSearchBar from '../components/MaterialsSearchBar';

const FormulaPage = () => {
  const[data, setData] = useState(null);

  const { formulaId } = useParams();

  useEffect(() => {
    reloadFormula();
  }, [])

  const reloadFormula = () => {
    formulasService.getFormula(formulaId)
      .then(response => {
        setData(response.data);
      })
  }

  if (!data) {
    return <span>Loading...</span>
  }

  return (
    <div className='row'>
      <div className='col'></div>
      <div className='col-12 col-sm-10 mt-5'>
        <h2>{data.name}</h2>
        <MaterialsSearchBar formulaId={formulaId} reloadFormula={reloadFormula} />
        {data && <FormulaTable2 data={data} reloadFormula={reloadFormula}/>}
      </div>
      <div className='col'></div>
    </div>
  )
}

export default FormulaPage