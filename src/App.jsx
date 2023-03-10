import { useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// React Router DOM
import { Routes, Route } from 'react-router-dom'

// Routes
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import FormulaDetailsPage from './pages/FormulaDetailsPage'
import FormulasPage from './pages/FormulasPage'
import CollectionsPage from './pages/CollectionsPage'
import CollectionDetailsPage from './pages/CollectionDetailsPage'

//Components
import NavbarPrivate from './components/NavbarPrivate'
import NavbarAnon from './components/NavbarAnon'
import IsPrivate from './hoc/IsPrivate'
import IsAnon from './hoc/IsAnon'

// Contexts
import { AuthContext } from '../context/auth.context'

// Icons
import FeatherIcon from 'feather-icons-react'


function App() {
  const { isSignedIn } = useContext(AuthContext);

  return (
    <div className="App container-fluid bg-light d-flex flex-column" style={{ "minHeight": "100vh"}}>
      {isSignedIn ? <NavbarPrivate /> : <NavbarAnon />}
      
      <div className="countainer-fluid px-3 px-sm-5 flex-grow-1 d-flex flex-column align-items-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<IsAnon><SignUpPage /></IsAnon>} />
          <Route path="/signin" element={<IsAnon><SignInPage /></IsAnon>} />
          <Route path="/collections" element={<IsPrivate><CollectionsPage /></IsPrivate>} />
          <Route path="/collections/:collectionId" element={<IsPrivate><CollectionDetailsPage showDeleteFromCollection /></IsPrivate>} />
          <Route path="/formulas" element={<IsPrivate><FormulasPage showDeleteFormula/></IsPrivate>} />
          <Route path="/formulas/:formulaId" element={<IsPrivate><FormulaDetailsPage /></IsPrivate>} />
        </Routes>
      </div>

      <div className="alert alert-warning p-2 align-items-center align-middle text-center w-100">
        <p className="m-0"><FeatherIcon icon="alert-triangle" size="18" className="me-2 mb-1"/>OpenBlend is currently not intended for actual use. Please don't enter any confidential information.</p>
      </div>
    </div>
  )
}

export default App
