import React from 'react'
import { useEffect, useState} from 'react'

// React Router DOM
import { useParams } from 'react-router-dom'

// Services
import formulasService from '../../services/formulas.service';
import FormulaHeader from '../components/FormulaHeader';

// Components
import FormulaTable from '../components/FormulaTable'
import MaterialsSearchBar from '../components/MaterialsSearchBar';

const FormulaPage = () => {
  const [data, setData] = useState(null);

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
    return (
      <div className="row justify-items-center align-items-center">
        <div className="col mx-auto text-center">Loading...</div>
      </div>  
    )
  }

  return (
    <div className='row'>
      <div className='col'></div>
      <div className='col-12 col-sm-10 my-5 position-relative'>

        <h2 className="fw-bold">{data.name} <span className="text-muted opacity-50 fs-5">{data.version}</span></h2>
        <h5 className="text-muted opacity-50 fw-normal">{data.tagline}</h5>

        <FormulaHeader data={data} />

        <MaterialsSearchBar formulaId={formulaId} reloadFormula={reloadFormula} />
        {data && <FormulaTable data={data} reloadFormula={reloadFormula}/>}
      </div>
      <div className='col'></div>
    </div>
  )
}

export default FormulaPage