import React from 'react'
import '../styles/AppartDescription.css'
import { useState } from 'react'

function AppartDescription(props) {
  const [visible, setVisible] = useState(false)
  const accordion = () => {
    setVisible(!visible)
  }
  return (
    <div onClick={accordion} className="description">
      <h3>
        {props.title}
        <span>⇓</span>
      </h3>
      <p>{visible && props.description}</p>
    </div>
  )
}

export default AppartDescription
