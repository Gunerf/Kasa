import React from 'react'
import '../styles/Cover.css'
import '../styles/AppartInfo.css'

function Cover(props) {
  return (
    <div className="container-image">
      <img
        className={`appart-image ${props.className}`}
        src={props.image}
        alt=""
      />
      <div className="overlay">
        <h1 className="overlay-title">{props.title}</h1>
      </div>
    </div>
  )
}

export default Cover
