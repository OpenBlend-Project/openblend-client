import React from 'react'
import { useState, useEffect } from 'react'

// React Router DOM
import { useParams, useNavigate } from 'react-router-dom'

// Services
import collectionsService from '../../services/collections.service';
import AddFormulaCard from '../components/AddFormulaCard';
import CreateFormulaModal from '../components/CreateFormulaModal';

// Components
import FormulaCard from '../components/FormulaCard';
import PlaceholderCard from '../components/PlaceholderCard';


const CollectionDetailsPage = ({ showDeleteFromCollection })=> {
  const [collection, setCollection] = useState(null);

  const { collectionId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    reloadCollection();
  }, [])

  const reloadCollection = () => {
    collectionsService.getCollection(collectionId)
      .then(response => {
        setCollection(response.data);
      })
  }

  const handleDeleteFormulaFromCollection = (formulaId) => {
    collectionsService.deleteFormulaFromCollection(collectionId, formulaId)
      .then(response => {
        console.log(response);
        reloadCollection();
      })
      .catch(error => console.log(error))
  }

  if (!collection) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (collection.formulas.length < 1) {
    return (
      <div className='row w-100'>
        <div className='col'></div>
        <div className='col-12 col-sm-10 my-5 position-relative'>
          <h2 className="fw-bold">{collection.name}</h2>  
          <h5 className="text-muted opacity-50 fw-normal">{collection.description}</h5>
          
          <div className="container-fluid p-0 my-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              <div className="col">
                <AddFormulaCard />
              </div>
              <div className="col">
                <PlaceholderCard />
              </div>
              <div className="col">
                <PlaceholderCard />
              </div>
            </div>
          </div>
        </div>
        <div className='col'></div>
        <CreateFormulaModal collection={collection._id}/>
      </div>
    )
  }

  return (
    <div className='row w-100'>
      <div className='col'></div>
      <div className='col-12 col-sm-10 my-5 position-relative'>
      
        <h2 className="fw-bold">{collection.name}</h2>  
        <h5 className="text-muted opacity-50 fw-normal">{collection.description}</h5>
        
        <div className="container-fluid p-0 my-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {collection.formulas.map(formula => <FormulaCard key={formula._id} data={formula} handleDeleteFormulaFromCollection={handleDeleteFormulaFromCollection} showDeleteFromCollection/>)}
          </div>
        </div>
      </div>
      <div className='col'></div>
      <CreateFormulaModal collection={collection._id}/>
    </div>
  )
}

export default CollectionDetailsPage