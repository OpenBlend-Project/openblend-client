import React from 'react'

const PageHeader = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="fw-bold">{ title }</h1>
      <p className="fs-2 text-muted">{ subtitle }</p>
    </>
  )
}

export default PageHeader