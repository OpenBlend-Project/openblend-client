import React from 'react'
import { Link } from 'react-router-dom'

// Utils
import getTimeAgo from '../../utils/getTimeAgo.utils'

// Icons
import FeatherIcon from 'feather-icons-react'
import CollectionCardDropdown from './CollectionCardDropdown'

const CollectionCard = ({ data }) => {
  return (
    <div className="col mt-3">
      <Link to={`/collections/${data._id}`} className="text-decoration-none">
        <div className="card border border-0 shadow-sm card-hover" style={{ height: "212px" }}>
          <div className="card-body text-dark px-4 py-3">
            <div className="row">
              <div className="col">
                <h5 className="card-title mb-1 text-nowrap text-truncate">{data.name}</h5>
              </div>
              <div className="col ms-auto text-end">
                <object>
                  <div className="nav-item dropdown">
                    <a className="nav-link ms-lg-4 p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <FeatherIcon icon="more-horizontal" className="text-muted" />
                    </a>
                    <CollectionCardDropdown data={data}/>
                  </div>
                </object>
              </div>
            </div>
            <p><span className="badge text-bg-secondary"></span></p>
            <p className="text-muted" style={{ fontSize: "14px" }}>{data.description}</p>
          </div>
          <div className="card-footer px-4 py-3">
            <p className="text-muted mb-0" style={{ fontSize: "12px" }}>{getTimeAgo(data.createdAt)}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CollectionCard