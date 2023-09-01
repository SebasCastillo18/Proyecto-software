import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import './styles/index.css'
import Cite from './Cite.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Cite/>
  </React.StrictMode>,
)
