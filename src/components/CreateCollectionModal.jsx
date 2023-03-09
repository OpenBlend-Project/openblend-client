import React from 'react'
import { useState, useContext } from 'react';

// Contexts
import { AuthContext } from '../../context/auth.context';

// Services
import collectionsService from '../../services/collections.service'


const CreateCollectionModal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useContext(AuthContext);

  const handleNameChange = (e) => {
    console.log(name);
    setName(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    console.log(description);
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {  
    const requestBody = { name, description, user: user._id }
    console.log(requestBody);

    collectionsService.createCollection(requestBody)
      .then(response => console.log('%c Collection Created', 'background: #222; color: #bada55'))
      .catch(error => console.log(error));
  }

  return (
    <div className="modal fade" id="createCollectionModal" tabIndex="-1" aria-labelledby="createCollectionModal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="createCollectionTitle" style={{ letterSpacing: "1.01px" }}>Create a new collection</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="collectionName" className="form-label">Name</label>
              <input type="text" className="form-control" id="collectionName" placeholder="My collection" onChange={handleNameChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="collectionDescription" className="form-label">Description (optional)</label>
              <textarea className="form-control" id="collectionDescription" rows="3" onChange={handleDescriptionChange}></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Create collection</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCollectionModal