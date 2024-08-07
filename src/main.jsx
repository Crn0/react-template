import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/Router'
import './global-styles/index.css'
import './global-styles/reset.css'
import './global-styles/theme.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
