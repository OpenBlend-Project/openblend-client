import React from 'react'
import { Link } from 'react-router-dom'

// Utils
import getTimeAgo from '../../utils/getTimeAgo.utils'

// Components
import FeatherIcon from 'feather-icons-react'
import FormulaCardDropdown from './FormulaCardDropdown'
import FormulaCardCollectionDropdown from './FormulaCardCollectionDropdown'

const FormulaCard = ({ data, handleDeleteFormulaFromCollection, showDeleteFromCollection, showDeleteFormula, setSelectedFormula }) => {
  const handleEdit = () => {
    setSelectedFormula(data);
  }

  return (
    <div className="col mt-3">
      <Link to={`/formulas/${data._id}`} className="text-decoration-none">
        <div className="card border border-0 shadow-sm card-hover" style={{ height: "212px" }}>
          <div className="card-body text-dark px-4 py-3">
            <div className="row d-flex">
              <div className="col text-truncate flex-grow-1">
                <h5 className="card-title mb-1 text-nowrap text-truncate">{data.name}</h5>
              </div>
              <div className="col text-end">
                <object>
                  <div className="nav-item dropdown">
                    <a className="nav-link p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleEdit}>
                      <FeatherIcon icon="more-horizontal" className="text-muted" />
                    </a>
                    {showDeleteFormula && <FormulaCardDropdown data={data} />}
                    {showDeleteFromCollection && <FormulaCardCollectionDropdown handleDeleteFormulaFromCollection={handleDeleteFormulaFromCollection} data={data} />}
                  </div>
                </object>
              </div>
            </div>
            <p><span className="badge text-bg-secondary">{data.olfactiveFamily}</span></p>
            <p className="text-muted" style={{ fontSize: "14px" }}>{data.tagline}</p>
          </div>
          <div className="card-footer px-4 py-3">
            <p className="text-muted mb-0" style={{ fontSize: "12px" }}>{getTimeAgo(data.createdAt)}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FormulaCard