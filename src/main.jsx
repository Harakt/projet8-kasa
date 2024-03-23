import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil/accueil'
import Propos from './pages/Propos'
import Header from './components/Header/header'
import Fiche from './pages/Fiche/fiche'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/fiche" element={<Fiche />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
