import React from 'react'
import logo from '../assets/openblend_pri_blk.svg';

// React Router DOM, React Router Bootstrap
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ps-3 pe-1 px-sm-5 py-2 py-sm-3">
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="OpenBlend" style={{ "maxHeight": "24px", "paddingBottom": "2px"}} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/formulae"}>My Formulae</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/collections"}>My Collections</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/community"}>Community</NavLink>
            </li>
          </ul>
          <Link to={"profile"} className="ms-lg-4">
            <img className="img-fluid bg-primary rounded-circle" src="https://userstock.io/data/wp-content/uploads/2017/09/sharon-christina-rorvik-233132-1024x947.jpg" alt="profile" style={{ "width": "40px", "height": "40px" }} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar