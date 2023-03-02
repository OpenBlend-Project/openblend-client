import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProviderWrapper } from '../context/auth.context'
import './index.css'

// React Router DOM
import { BrowserRouter as Router } from 'react-router-dom'

// Bootstrap
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
)
