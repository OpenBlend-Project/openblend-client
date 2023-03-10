import React from 'react'
import { useEffect, useState } from 'react'

// Services
import collectionsService from '../../services/collections.service';
import CollectionCard from '../components/CollectionCard';

// Components
import CreateCollectionModal from '../components/CreateCollectionModal';

const CollectionsPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    collectionsService.getUserCollections()
      .then(response => {
        console.log(response.data);
        setCollections(response.data);
      })
      .catch(error => console.log(error));
  }, [])


  return (
    <div className='row w-100'>
      <div className='col'></div>
      <div className='col-12 col-sm-10 my-5 position-relative'>
        <div className="d-flex">
          <div>
            <h2 className="fw-bold">My Collections</h2>
          </div>
          <div className="ms-auto">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createCollectionModal">
              Create new collection
            </button>
          </div>
        </div>

        <h5 className="text-muted opacity-50 fw-normal">Browse and manage your collections</h5>
        
        <div className="container-fluid p-0 my-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {collections && collections.map(collection => <CollectionCard key={collection._id} data={collection}/>)}
          </div>
        </div>

        <CreateCollectionModal />
      </div>
      <div className='col'></div>
    </div>
  )
}

export default CollectionsPage