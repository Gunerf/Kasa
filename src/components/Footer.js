import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo-kasa-white.PNG'

function Footer() {
  return (
    <div className="footer">
      <img className="image" src={logo} alt="logo footer"></img>
      <h1 className="title">© 2020 Kasa. All rights reserved</h1>
    </div>
  )
}

export default Footer
