import React from 'react'
import { useState, useContext } from 'react'

// React Router DOM
import { Link, useNavigate } from 'react-router-dom'

// Services
import authService from '../../services/auth.service';

// Context
import { AuthContext } from '../../context/auth.context';

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignInSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password };

    authService.signin(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/formulas");
      })
      .catch((error) => {
        const errorDescription = error.response.data.description;
        setErrorMessage(errorDescription);
      })
  }

  return (
    <form onSubmit={handleSignInSubmit}>
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
        <button className="btn btn-primary btn-lg" type="submit">Sign in</button>
      </div>

      {errorMessage && <div className="alert alert-danger" role="alert" >{errorMessage}</div>}

      <div className="alert alert-primary mt-5" role="alert">
        By signing up you agree to OpenBlend's <a href="/terms">Terms and Conditions</a>
      </div>

      <p>Don't have an account yet? <span><Link to="/signup">Sign up</Link></span></p>
    </form>
  )
}

export default SignInForm