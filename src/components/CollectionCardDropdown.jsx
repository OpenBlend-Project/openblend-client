import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import collectionsService from '../../services/collections.service';


const CollectionCardDropdown = ({ data }) => {
  const navigate = useNavigate();

  const handleDeleteCollection = (formulaId) =>{
    collectionsService.deleteCollection(formulaId)
      .then(response => {
        console.log("deleted collection")
        navigate("/collections");
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="dropdown-menu dropdown-menu-end offset-2 border border-0 shadow">
      <Link to={`/formulas/${data._id}/edit`} className="dropdown-item">Edit Collection</Link>
      <hr className="dropdown-divider" />
      <span className="dropdown-item text-danger" onClick={() => handleDeleteCollection(data._id)}>Delete Collection</span>
    </div>
  )
}

export default CollectionCardDropdown