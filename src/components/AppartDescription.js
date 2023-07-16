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
        <span>
          {!visible && (
            <i className="fas fa-chevron-down" onClick={accordion}></i>
          )}
          {visible && <i className="fas fa-chevron-up" onClick={accordion}></i>}
        </span>
      </h3>
      {visible && <p>{props.description}</p>}
    </div>
  )
}

export default AppartDescription
