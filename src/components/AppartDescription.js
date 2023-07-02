import React from 'react'
import '../styles/AppartDescription.css'

function AppartDescription(props) {
  return (
    <div className="description">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default AppartDescription
