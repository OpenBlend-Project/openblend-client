import React from 'react'
import { useContext } from 'react';
import logo from '../assets/openblend_pri_blk.svg';

// React Router DOM, React Router Bootstrap
import { Link, NavLink } from 'react-router-dom';

// Contexts
import { AuthContext } from '../../context/auth.context';


const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ps-3 pe-1 px-sm-5 py-2 py-sm-3">
        <Link to={"/formulas"} className="navbar-brand align-items-center">
          <h6 className="my-auto">
            <img src={logo} alt="OpenBlend" style={{ "maxHeight": "24px" }} />
            <span className="badge ms-3 pb-1 text-bg-warning d-none d-sm-inline">private alpha</span>
            <span className="badge ms-3 pb-1 text-bg-warning d-sm-inline d-sm-none">α</span>
          </h6>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0" style={{ fontSize: "14px", letterSpacing: "0.4px" }}>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/formulas"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/formulas"}>My Formulas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/collections"}>My Collections</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to={"/community"}>Community</NavLink>
            </li> */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle ms-lg-4 p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="img-fluid rounded-circle" src="https://userstock.io/data/wp-content/uploads/2017/09/sharon-christina-rorvik-233132-1024x947.jpg" alt="profile" style={{ "width": "40px", "height": "40px" }} />
              </a>
              <ul className="dropdown-menu dropdown-menu-end mt-2 border border-0 shadow-sm">
                <li className="dropdown-header">Hello{`${user !== null ? ", " + user.username : ""}`}!</li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-danger" onClick={logOutUser}>Log Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar