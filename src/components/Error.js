import React from 'react'
import '../styles/Error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="main">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">
        <p>Retourner sur la page d'accueil</p>
      </Link>
    </div>
  )
}

export default Error
