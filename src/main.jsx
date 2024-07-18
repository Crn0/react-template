import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './global-styles/index.css'
import './global-styles/reset.css'
import './global-styles/theme.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
