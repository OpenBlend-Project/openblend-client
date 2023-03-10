import React from 'react'
import { useEffect, useState} from 'react'

// Assets
import FeatherIcon from 'feather-icons-react'

// React Router DOM
import { useParams } from 'react-router-dom'

// Services
import formulasService from '../../services/formulas.service';
import FormulaHeader from '../components/FormulaHeader';

// Components
import FormulaTable from '../components/FormulaTable'
import MaterialsSearchBar from '../components/MaterialsSearchBar';
import AddFormulaToCollectionModal from '../components/AddFormulaToCollectionModal';
import EditFormulaModal from '../components/EditFormulaModal';

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
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className='row w-100'>
      <div className='col'></div>
      <div className='col-12 col-sm-10 my-5 position-relative'>
        <div className="d-flex">
          <div>
            <h2 className="fw-bold">{data.name} <span className="text-muted opacity-50 fs-5">{data.version}</span></h2>
          </div>
          <div className="ms-auto">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editFormulaModal">
              Edit formula
            </button>
            <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#addFormulaToCollectionModal">
              Add to collection
            </button>
          </div>
        </div>
        <h5 className="text-muted opacity-50 fw-normal">{data.tagline}</h5>

        <FormulaHeader data={data} />

        <MaterialsSearchBar formulaId={formulaId} reloadFormula={reloadFormula} />
        {data && <FormulaTable data={data} reloadFormula={reloadFormula}/>}

        <AddFormulaToCollectionModal formulaId={formulaId} />
        <EditFormulaModal data={data} />
      </div>
      <div className='col'></div>
    </div>
  )
}

export default FormulaPage