import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="logo-kasa.PNG" alt="logo kasa" />
        </Link>
      </div>
      <div className="header">
        <Link to="/">
          <div className="url">Accueil</div>
        </Link>
        <Link to="/about">
          <div className="url">A propos</div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
