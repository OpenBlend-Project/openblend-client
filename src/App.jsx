import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// React Router DOM
import { Routes, Route } from 'react-router-dom'

// Routes
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SigninPage'
import FormulaPage from './pages/FormulaPage'

//Components
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App container-fluid bg-light" style={{ "minHeight": "100vh"}}>
      <Navbar />
      
      <div className="countainer-fluid px-3 px-sm-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/formulas/:id" element={<FormulaPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
