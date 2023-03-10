import React from 'react'
import { useState } from 'react'

// React Router DOM
import { Link, useNavigate } from 'react-router-dom'

// Services
import authService from '../../services/auth.service';


const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Button Clicked");

    const requestBody = { username, email, password };

    authService.signup(requestBody)
      .then((response) => {
        navigate("/signin");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  }

  return (
    <form onSubmit={handleSignupSubmit}>
      <div className="input-group mb-3">
      <span className="input-group-text">@</span>
        <div className="form-floating">
          <input 
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            onChange={handleUsername}
          />
          <label htmlFor="username">Username</label>
        </div>
      </div>

      <div className='form-floating mb-3'>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email"
          inputMode="email"
          onChange={handleEmail}
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className='form-floating mb-3'>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        <label htmlFor="password">Password</label>
      </div>

      <div className="d-grid">
        <button className="btn btn-primary btn-lg" type="submit">Sign up</button>
      </div>

      {errorMessage && <div className="alert alert-danger" role="alert" >{errorMessage}</div>}

      <div className="alert alert-primary mt-5" role="alert">
        By signing up you agree to OpenBlend's <a href="/terms">Terms and Conditions</a>
      </div>

      <p>Already have an account? <span><Link to="/signin">Sign in</Link></span></p>
    </form>
  )
}

export default SignUpForm