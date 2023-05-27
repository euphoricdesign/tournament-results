import React from 'react'
import ReactDOM from 'react-dom/client'
import { TournamentApp } from './TournamentApp'
import { BrowserRouter } from 'react-router-dom'

import './fonts.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TournamentApp />
    </BrowserRouter>
  </React.StrictMode>,
)
