import React from 'react'

// Utils
import getTimeAgo from '../../utils/getTimeAgo.utils'

const RadioSelectionCard = ({ name, createdAt, collectionId, setSelectedCollection }) => {
  
  const handleSelect = () => {
    setSelectedCollection(collectionId);
  }

  return (
    <>
      <button type="button" className="list-group-item list-group-item-action mb-2 p-3 rounded border border-2" onClick={handleSelect}>
        <h5 className="mb-0">{name}</h5>
        <small className="text-muted">{getTimeAgo(createdAt)}</small>
      </button>
    </>
  )
}

export default RadioSelectionCard