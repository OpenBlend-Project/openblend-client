import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// React Router DOM
import { Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
