import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Importo Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Renderiza la aplicación dentro del div con id "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
