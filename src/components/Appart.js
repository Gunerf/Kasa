import React from 'react'
import { Link } from 'react-router-dom'

function Appart() {
  return (
    <Link to="/info">
      <div className="appart">
        <h2 className="title">Titre de la location</h2>
      </div>
    </Link>
  )
}

export default Appart
