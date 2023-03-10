import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import heroImage from '../assets/images/hero_image.png'

const HomePage = () => {
  return (
    <div className="row w-100 my-auto">
      <div className="col-1 d-none d-md-block"></div>
      <div className="col pb-5 d-flex flex-column justify-content-center">
        <p><span className="badge rounded-pill text-bg-warning align-bottom"><span className="fw-normal">Now in</span> private alpha 🎉</span></p>
        <h1>Perfume Creation is now Open Source</h1>
        <p className="fs-4 mt-4" style={{ lineHeight: "2rem" }}>Say Hello to OpenBlend – The Open Source Perfume Formula Manager Designed for Perfumers, by Perfumers</p>
          <div className="mt-2 mt-sm-4">
            <a className="btn btn-lg btn-primary px-4 w-100 w-sm-auto" href="/signup">Join OpenBlend</a>
            <a className="btn btn-lg btn-link text-decoration-none px-4 w-100 w-sm-auto" href="/signin">Sign In</a>
          </div>
      </div>
      <div className="col p-5 d-none d-lg-block align-middle text-center">
        <img className="img-fluid" style={{ maxHeight: "640px" }} src={heroImage} alt="perfume flask with oil dripping from it" />
      </div>
      <div className="col-1 d-none d-md-block"></div>
    </div>
  )
}

export default HomePage