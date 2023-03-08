import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import { Navigate } from 'react-router-dom'

import React from 'react'

const IsAnon = ({ children }) => {
  const { isSignedIn, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (isSignedIn) {
    return <Navigate to="/" />
  } else {
    return children;
  }
}

export default IsAnon