import React from 'react'
import { useState, useEffect } from 'react';

// Services
import collectionsService from '../../services/collections.service'

// Components
import RadioSelectionCard from './RadioSelectionCard';

const AddFormulaToCollectionModal = ( { formulaId }) => {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState("");

  useEffect(() => {
    collectionsService.getUserCollections()
      .then(collectionsFromDB => {
        const filteredCollections = collectionsFromDB.data.filter(collection => !collection.formulas.includes(formulaId))
        setCollections(filteredCollections)
      })
      .catch(error => console.log(error));
  }, [])

  const handleSubmit = (e) => {
    collectionsService.updateCollection(selectedCollection, { $push: { formulas: formulaId} } )
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  console.log(selectedCollection);


  return (
    <div className="modal fade" id="addFormulaToCollectionModal" tabIndex="-1" aria-labelledby="addFormulaToCollectionModal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="createCollectionTitle" style={{ letterSpacing: "1.01px" }}>Add formula to collection</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body list-group">
            {collections.map(collection => <RadioSelectionCard key={collection._id} name={collection.name} createdAt={collection.createdAt} collectionId={collection._id} setSelectedCollection={setSelectedCollection} />)}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Add to collection</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddFormulaToCollectionModal