import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Appart.css'

function Appart(props) {
  const appartId = {
    appartId: props.id,
  }
  return (
    <Link to="/info" state={appartId}>
      <div className="appart">
        <div className="container">
          <img src={props.image} className="pic" alt=""></img>
          <h2 className="location-name">{props.title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default Appart
