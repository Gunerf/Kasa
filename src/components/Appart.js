import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Appart.css'
import data from '../data/logements.json'

function Appart() {
  console.log(data)
  console.log(data.length)
  return (
    <Link to="/info">
      <div className="appart">
        <div className="container">
          <img src="https://picsum.photos/800/400" className="pic" alt=""></img>
          <h2 className="location-name">Titre de la location</h2>
        </div>
      </div>
    </Link>
  )
}

export default Appart
