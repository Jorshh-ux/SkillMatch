import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './App'
import Modalidades from './modalidades'

import './index.css'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modalidades" element={<Modalidades />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)