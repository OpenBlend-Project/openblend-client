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
import IsPrivate from './hoc/IsPrivate'
import IsAnon from './hoc/IsAnon'
import CollectionsPage from './pages/CollectionsPage'

function App() {

  return (
    <div className="App container-fluid bg-light" style={{ "minHeight": "100vh"}}>
      <Navbar />
      
      <div className="countainer-fluid px-3 px-sm-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<IsAnon><SignUpPage /></IsAnon>} />
          <Route path="/signin" element={<IsAnon><SignInPage /></IsAnon>} />
          <Route path="/collections" element={<IsPrivate><CollectionsPage /></IsPrivate>} />
          <Route path="/formulas/:formulaId" element={<IsPrivate><FormulaPage /></IsPrivate>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
