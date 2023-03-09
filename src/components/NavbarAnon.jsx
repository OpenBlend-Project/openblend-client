import React from 'react'
import logo from '../assets/openblend_pri_blk.svg';

// React Router DOM, React Router Bootstrap
import { Link, NavLink } from 'react-router-dom';

const NavbarAnon = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ps-3 pe-1 px-sm-5 py-2 py-sm-3">
        <Link to={"/"} className="navbar-brand">
          <h6 className="align-items-center">
            <img src={logo} alt="OpenBlend" style={{ "maxHeight": "24px" }} />
            <span className="badge ms-3 pb-1 text-bg-warning d-none d-sm-inline">private alpha</span>
            <span className="badge ms-3 pb-1 text-bg-warning d-sm-inline d-sm-none">α</span>
          </h6>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/formulas"}>About</NavLink>
            </li>
            <li className="nav-item">
              <Link to={"/signup"} className="btn btn-primary ms-4">Join now</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarAnon