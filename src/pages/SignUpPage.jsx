import React from 'react'

// Components
import SignUpForm from '../components/SignUpForm'

const SignUpPage = () => {
  return (
    <div className="row w-100 my-auto d-flex justify-content-center align-items-center" style={{ maxWidth: "320px" }}>
      <h4 className="fw-bold mb-4">Join OpenBlend</h4>

      <SignUpForm />
    </div>
  )
}

export default SignUpPage