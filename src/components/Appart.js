import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Appart.css'

function Appart(props) {
  return (
    <div className="appart">
      <Link to={'/apparts/' + props.id}>
        <div className="container">
          <img src={props.image} className="pic" alt=""></img>
          <h2 className="location-name">{props.title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Appart
