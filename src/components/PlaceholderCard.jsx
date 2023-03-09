import React from 'react'

const PlaceholderCard = () => {
  return (
    <div className="card border border-0 shadow-sm" style={{ height: "212px" }} aria-hidden="true">
      <div className="card-body text-dark px-4 py-3">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder placeholder-lg col-3 rounded-1"></span>
        </p>
        <p><span className="badge disabled"></span></p>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
        </p>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-5"></span>
        </p>
      </div>
    </div>
  )
}

export default PlaceholderCard