import { useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// React Router DOM
import { Routes, Route } from 'react-router-dom'

// Routes
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SigninPage'
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

function App() {
  const { isSignedIn } = useContext(AuthContext);

  return (
    <div className="App container-fluid bg-light" style={{ "minHeight": "100vh"}}>
      {isSignedIn ? <NavbarPrivate /> : <NavbarAnon />}
      
      <div className="countainer-fluid px-3 px-sm-5">
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
    </div>
  )
}

export default App
