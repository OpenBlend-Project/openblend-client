import React from 'react'
import { useEffect, useState } from 'react'

// Services
import formulasService from '../../services/formulas.service';

// Components
import FormulaCard from '../components/FormulaCard';
import CreateFormulaModal from '../components/CreateFormulaModal';
import EditFormulaModal from '../components/EditFormulaModal';


const FormulasPage = ({ showDeleteFormula}) => {
  const [formulas, setFormulas] = useState([]);
  const [selectedFormula, setSelectedFormula] = useState(null);

  useEffect(() => {
    formulasService.getUserFormulas()
      .then(formulasFromDB => {
        console.log(formulasFromDB.data);
        setFormulas(formulasFromDB.data);
      })
      .catch(error => console.log(error));
  }, [])  

  if (!formulas) {
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
            <h2 className="fw-bold">My Formulas</h2>
          </div>
          <div className="ms-auto">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createFormulaModal">
              Create new formula
            </button>
          </div>
        </div>
        <h5 className="text-muted opacity-50 fw-normal">Browse and manage your formulas</h5>
        <div className="container-fluid p-0 my-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {formulas.map(formula => <FormulaCard key={formula._id} data={formula} setSelectedFormula={setSelectedFormula} showDeleteFormula  />)}
          </div>
        </div>



        <CreateFormulaModal />
        {selectedFormula && <EditFormulaModal data={selectedFormula} />}
      </div>
      <div className='col'></div>
    </div>
  )
}

export default FormulasPage