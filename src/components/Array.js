import React from 'react'
import '../styles/Array.css'
import Appart from './Appart'
import data from '../data/logements.json'

function Array() {
  return (
    <div className="background">
      {data.map((appart) => (
        <Appart title={appart.title} image={appart.cover} />
      ))}
    </div>
  )
}

export default Array
