import React from 'react'

// Components
import SignInForm from '../components/SignInForm'

const SignInPage = () => {
  return (
    <div className="row w-100 my-auto d-flex justify-content-center align-items-center" style={{ maxWidth: "320px" }}>
      <h4 className="fw-bold mb-4">Sign in to OpenBlend</h4>

      <SignInForm />
    </div>
  )
}

export default SignInPage