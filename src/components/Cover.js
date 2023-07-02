import React from 'react'
import '../styles/Cover.css'
import '../styles/AppartInfo.css'

function Cover(props) {
  return (
    <div className="container-image">
      <img className="appart-image" src={props.image} alt="" />
    </div>
  )
}

export default Cover
