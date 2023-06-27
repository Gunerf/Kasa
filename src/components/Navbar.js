import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo-kasa.PNG" alt="logo kasa" />
      </div>
      <div className="header">
        <div>Accueil</div>
        <div>A propos</div>
      </div>
    </nav>
  )
}

export default Navbar
