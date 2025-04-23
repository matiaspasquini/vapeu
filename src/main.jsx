import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Pages específicas por servicio
import Civiles from './pages/Civiles.jsx'
import Viales from './pages/Viales.jsx'
import Mineros from './pages/Mineros'
import Aridos from './pages/Aridos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicios/civiles" element={<Civiles />} />
        <Route path="/servicios/viales" element={<Viales />} />
        <Route path="/servicios/mineros" element={<Mineros />} />
        <Route path="/servicios/aridos" element={<Aridos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
